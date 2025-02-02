import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-devenez-membre',
  templateUrl: './devenez-membre.component.html',
  styleUrls: ['./devenez-membre.component.scss'],
})
export class DevenezMembreComponent {
  currentStep = 0;
  steps = [
    { label: 'Étape 1', completed: false },
    { label: 'Étape 2', completed: false },
    { label: 'Étape 3', completed: false },
  ];

  paymentType: string = '';

    firstFormGroup!: FormGroup;
    secondFormGroup!: FormGroup;
    thirdFormGroup!: FormGroup;
  
    constructor(private fb: FormBuilder) {
       this.firstFormGroup = this.fb.group({
            raisonSociale: ['', Validators.required]
          });
      
          this.secondFormGroup = this.fb.group({
            paymentType: ['electronic', Validators.required],
          });
      
          this.thirdFormGroup = this.fb.group({
            paymentMethod: ['', Validators.required],
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
    }

    submitForm() {
      // if (this.paymentMethodFormGroup.valid) {
      //   const finalData = {
      //     paymentType: this.paymentTypeFormGroup.value.paymentType,
      //     paymentMethod: this.paymentMethodFormGroup.value.paymentMethod,
      //   };
      //   console.log('Données de paiement :', finalData);
      // }
    }

}
