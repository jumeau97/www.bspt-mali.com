import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { GeneralService } from 'src/app/services/general/general.service';
import { myConstants } from '../../utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publish-new-offers',
  templateUrl: './publish-new-offers.component.html',
  styleUrls: ['./publish-new-offers.component.scss'],
})
export class PublishNewOffersComponent implements OnInit {
  selectedMethod: string | null = null;
  messages: Message[] | null = null;
  myformGroup!: FormGroup;
  submitted: boolean = false;
  image!: File;
  activities: any[] = [];
  user: any;
  enterprises: any;

  constructor(private generalService: GeneralService, private fb: FormBuilder) {
    this.getActivities();
    this.getcurrentUser();

    this.myformGroup = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      startDate: [''],
      endDate: [''],
      activities: [''],
      idEnterprise: [],
      doc: [],
      status: ['WAITING'],
    });
  }

  error_messages = {
    name: [{ type: 'required', message: 'le champs est réquis' }],
    description: [{ type: 'required', message: 'le champs est réquis' }],
    startDate: [{ type: 'required', message: 'le champs est réquis' }],
    endDate: [{ type: 'required', message: 'le champs est réquis' }],
    activities: [{ type: 'required', message: 'le champs est réquis' }],
    idEnterprise: [{ type: 'required', message: 'le champs est réquis' }],
    doc: [{ type: 'required', message: 'le champs est réquis' }],
  };

  ngOnInit(): void {}

  getActivities() {
    this.generalService
      .getActivities({ limit: myConstants.maxLimit }, {})
      .subscribe({
        next: (result: any) => {
          console.log('liste des activités', result.data.items);

          this.activities = result.data.items;
        },
        error: (error: any) => {},
      });
  }

  getEnterprises() {
    this.generalService
      .getEnterprises({ pageSize: myConstants.maxLimit }, {})
      .subscribe({
        next: (result: any) => {
          console.log('les entreprises', result.data.items);
          this.enterprises = result.data.items;
        },
        error: (error: any) => {},
      });
  }

  uploadDoc(event: any) {
    console.log('file', event.target);

    if (event.target.files) {
      this.image = event.target.files[0];
      console.log('test image ', this.image.name);
    }
  }

  publishOffers() {
    this.submitted = true;
    console.log('form', this.myformGroup.value);

    if (this.myformGroup.valid) {
      const formData = new FormData();

      const body = {
        eventRequest: {
          ...this.myformGroup.value,
        },
      };

      console.log('evnt req', body.eventRequest);

      const json = JSON.stringify(body.eventRequest);
      console.log('json', json);

      const blob = new Blob([json], {
        type: 'application/json',
      });

      formData.append('data', json);
      formData.append('file', this.image);

      this.generalService.publishOffers(formData).subscribe({
        next: (result: any) => {
          console.log('result', result);
        },
        error: (error: any) => {},
      });
    }
  }

  checkRole() {
    console.log(
      'role status',
      this.user?.roles.find((role: any) => role)
    );

    return this.user?.roles.find((role: any) => role);
  }

  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        console.log('result', result);
        // recuprer la liste de toutes les entreprises 
        this.getEnterprises();
        this.user = result.user;
        if (this.checkRole()) {
          this.myformGroup
            .get('idEnterprise')
            ?.setValue(result.user.enterprise?.id);
          console.log('form update', this.myformGroup.value);
        }
      },
      error: (error: any) => {},
    });
  }
}
