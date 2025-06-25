import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { GeneralService } from 'src/app/services/general/general.service';
import { myConstants } from 'src/app/views/utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-devenez-membre',
  templateUrl: './devenez-membre.component.html',
  styleUrls: ['./devenez-membre.component.scss'],
})
export class DevenezMembreComponent {
  currentStep = 0;
  @ViewChild('top') topElement!: ElementRef;
  selectedMethod: string | null = null;
  initPayStatus: boolean = false;
  initPayMsg: string | null = null;
  messages: Message[] | null = null;
  steps = [
    { label: 'Étape 1', completed: false },
    { label: 'Étape 2', completed: false },
    { label: 'Étape 3', completed: false },
  ];
  electronicMethods = [
    {
      label: 'Orange Money',
      value: 'Orange Money',
      image: 'assets/images/payment_method/orange_money.jpg',
    },
    {
      label: 'Moov Money',
      value: 'Moov Money',
      image: 'assets/images/payment_method/moov.jpg',
    },
     {
      label: 'Sama Money',
      value: 'Sama Money',
      image: 'assets/images/payment_method/sama_money.jpg',
    },
    {
      label: 'Carte Visa',
      value: 'Carte Visa',
      image: 'assets/images/payment_method/mastercard.jpg',
    },
  ];

  paymentType: string = '';

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  paymentSuccess: boolean = false;

  constructor(
    private fb: FormBuilder,
    private viewportScroller: ViewportScroller,
    private generalService: GeneralService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.firstFormGroup = this.fb.group({
      raisonSociale: ['', Validators.required],
    });

    this.secondFormGroup = this.fb.group({
      paymentType: ['electronic', Validators.required],
    });

    this.thirdFormGroup = this.fb.group({
      paymentMethod: ['', Validators.required],
      paymentPhone: [''],
    });
  }

  nextStep() {
    if (this.currentStep === 0 && this.firstFormGroup.valid) {
      this.steps[this.currentStep].completed = true;
      this.currentStep++;
    } else if (this.currentStep === 1 && this.secondFormGroup.valid) {
      this.steps[this.currentStep].completed = true;
      this.paymentType = this.secondFormGroup.value.paymentType;
      this.currentStep++;
    }
    window.scroll({
      top: 500,
      left: 0,
      behavior: 'smooth',
    });
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(index: number) {
    if (index < this.currentStep) {
      this.currentStep = index;
    }

    //  this.topElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    //         const el = document.getElementById('top');
    // if (el) {
    //   el.scrollIntoView({ behavior: 'smooth' });
    // }
  }

  submitForm() {
    const generateRef = () => {
      const now = new Date();
      return `BSTP.${now.getFullYear()}${
        now.getMonth() + 1
      }${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}`;
    };

    if (this.thirdFormGroup.valid) {
      switch (this.thirdFormGroup.get('paymentMethod')?.value) {
        case 'Sama Money': {
          if (this.thirdFormGroup.get('paymentPhone')?.value != '') {
            //la reference de la commande
            const paymentRef = `${generateRef()}.SAMA`;
            this.initPayStatus = true;
            console.log('reference', paymentRef);
            const paymentInfos = {
              amount: '100',
              orderId: `${paymentRef}`,
              phone_number: `${this.thirdFormGroup.get('paymentPhone')?.value}`,
              callback_url: `${environment.host}payment/callback/sama`,
              description: 'Paiement adhesion BSTP MALI',
            };

            this.generalService.samaPay(paymentInfos).subscribe({
              next: (result: any) => {
                console.log('result', result);
                if (result.etat == 'OK') {
                  this.initPayMsg = result.message;
                  this.messages = [
                    { severity: 'info', detail: this.initPayMsg! },
                  ];
                  console.log('reference', paymentRef);
                  console.log(
                    'host',
                    `${environment.host}payment/${paymentRef}`
                  );

                  const source = new EventSource(
                    `${environment.host}payment/${paymentRef}`
                  );

                  source.onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    console.log('Payment event data:', data);

                    if (data.status === 'confirmed') {
                      // subscribeModule(false, false);
                      this.paymentSuccess = true;
                      this.cdr.detectChanges();
                      console.log('Paiement confirmé !');
                      source.close();
                    }
                  };

                  source.onerror = (error) => {
                    console.error('EventSource failed:', error);
                    source.close();
                  };
                } else {
                }
              },
              error: (error: any) => {},
              complete: () => {
                this.initPayStatus = false;
              },
            });
          }
          break;
        }
        case 'Moov Money': {
          if (this.thirdFormGroup.get('paymentPhone')?.value != '') {
            //la reference de la commande
            let paymentRef = `${generateRef()}.MOOV`;
            console.log('reference', paymentRef);
            this.initPayStatus = true;
            const paymentInfos = {
              amount: 200,
              orderId: `${paymentRef}`,
              phone_number: `${this.thirdFormGroup.get('paymentPhone')?.value}`,
              remarks: 'NGS',
              description: 'Paiement adhesion BSTP Mali',
              type: 'PAY',
              callback_url: `${environment.host}payment/callback/moov`,
            };

            this.generalService.moovPay(paymentInfos).subscribe({
              next: (result: any) => {
                console.log('result', result);
                if (result.etat == 'OK') {
                  this.initPayMsg = result.message;
                  this.messages = [
                    { severity: 'info', detail: this.initPayMsg! },
                  ];
                  console.log('reference', paymentRef);
                  console.log(
                    'host',
                    `${environment.host}payment/${paymentRef}`
                  );

                  const source = new EventSource(
                    `${environment.host}payment/${paymentRef}`
                  );

                  source.onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    console.log('Payment event data:', data);

                    if (data.status === 'confirmed') {
                      // subscribeModule(false, false);
                      this.paymentSuccess = true;
                      this.cdr.detectChanges();
                      console.log('Paiement confirmé !');
                      source.close();
                    }
                  };

                  source.onerror = (error) => {
                    console.error('EventSource failed:', error);
                    source.close();
                  };
                } else {
                }
              },
              error: (error: any) => {},
              complete: () => {
                this.initPayStatus = false;
              },
            });
          }
          break;
        }
        case 'Orange Money': {
          if (this.thirdFormGroup.get('paymentPhone')?.value != '') {
            //la reference de la commande
            const paymentRef = `${generateRef()}.OM`;
            console.log('reference', paymentRef);
            this.initPayStatus = true;
            let paymentInfos = {
              amount: '100',
              orderId: `${paymentRef}`,
              phone_number: `${this.thirdFormGroup.get('paymentPhone')?.value}`,
              notify_url: `${environment.host}payment/callback`,
            };
            this.generalService.orangePayWithRedirect(paymentInfos).subscribe({
              next: (result: any) => {
                console.log('result', result);
                if (result.etat == 'OK') {
                  this.initPayMsg = result.message;
                  this.messages = [
                    { severity: 'info', detail: this.initPayMsg! },
                  ];
                  console.log('reference', paymentRef);
                  console.log(
                    'host',
                    `${environment.host}payment/${paymentRef}`
                  );

                  const source = new EventSource(
                    `${environment.host}payment/${paymentRef}`
                  );

                  source.onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    console.log('Payment event data:', data);

                    if (data.status === 'confirmed') {
                      // subscribeModule(false, false);
                      this.paymentSuccess = true;
                      this.cdr.detectChanges();
                      console.log('Paiement confirmé !');
                      source.close();
                    }
                  };

                  source.onerror = (error) => {
                    console.error('EventSource failed:', error);
                    source.close();
                  };
                } else {
                }
              },
              error: (error: any) => {},
              complete: () => {
                this.initPayStatus = false;
              },
            });
          }

          break;
        }
        case 'Carte Visa': {
          if (this.thirdFormGroup.get('paymentPhone')?.value != '') {
            let paymentInfos = {
              ...myConstants,
              montant: '100',
              orderId: 'bstp_0007',
              telephone: `${this.thirdFormGroup.get('paymentPhone')?.value}`,
            };
            this.generalService.stripePay(paymentInfos).subscribe({
              next: (result: any) => {},
              error: (error: any) => {},
            });
          }
          break;
        }

        default:
          break;
      }
    }
  }
  onPaymentMethodSelected(method: string) {
    this.selectedMethod = method;
    this.thirdFormGroup.patchValue({ paymentMethod: method });
  }

  resetSelection() {
    this.selectedMethod = null;
    this.thirdFormGroup.patchValue({ paymentMethod: '' });
  }

  getSelectedMethod() {
    return this.electronicMethods.find((m) => m.value === this.selectedMethod);
  }

  goToHomePage(){
  //  this.paymentSuccess=false;
   this.firstFormGroup.reset();
   this.secondFormGroup.reset();
   this.thirdFormGroup.reset();
   this.router.navigate(['/']);
  }

 
}
