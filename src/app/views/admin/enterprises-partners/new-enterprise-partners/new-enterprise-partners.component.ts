import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';
import { myConstants } from 'src/app/views/utils';

@Component({
  selector: 'app-new-enterprise-partners',
  templateUrl: './new-enterprise-partners.component.html',
  styleUrls: ['./new-enterprise-partners.component.scss'],
})
export class NewEnterprisePartnersComponent {
  myForm: FormGroup | any;
  submitted: boolean = false;
  activities: any[] = [];
  images!: File[];
  logoImage!: File;
  constructor(private generalService: GeneralService, private fb: FormBuilder) {
    this.getActivities();
    this.myForm = this.fb.group({
      name: [, [Validators.required]],
      creationDate: [, [Validators.required]],
      legalStatus: [, [Validators.required]],
      representedBy: [, [Validators.required]],
      email: [, [Validators.required]],
      address: [, [Validators.required]],
      description: [, [Validators.required]],
      activities: [, [Validators.required]],
      phoneNumberFirst: [, [Validators.required]],
      phoneNumberSecond: [, []],
      docs: [, [Validators.required]],
      logo: [, [Validators.required]],
    });
  }

  error_messages = {
    name: [{ type: 'required', message: 'le champs est réquis' }],
    creationDate: [{ type: 'required', message: 'le champs est réquis' }],
    address: [{ type: 'required', message: 'le champs est réquis' }],
    legalStatus: [{ type: 'required', message: 'le champs est réquis' }],
    representedBy: [{ type: 'required', message: 'le champs est réquis' }],
    description: [{ type: 'required', message: 'le champs est réquis' }],
    activities: [{ type: 'required', message: 'le champs est réquis' }],
    phoneNumberFirst: [{ type: 'required', message: 'le champs est réquis' }],
    phoneNumberSecond: [{ type: 'required', message: 'le champs est réquis' }],
    email: [
      { type: 'required', message: 'le champs est réquis' },
      { type: 'email', message: 'format invalide' },
    ],
    docs: [{ type: 'required', message: 'le champs est réquis' }],
    logo: [{ type: 'required', message: 'le champs est réquis' }],
  };
  ngOnInit(): void {}

  uploadDocs(event: any) {
    console.log('events', event);
    console.log('file', event.target.files);

    if (event.target.files) {
      this.images = event.target.files;
      console.log('test image ', this.images);
    }
  }

  uploadlogo(event: any) {
    console.log('events', event);
    console.log('file', event.target.files);

    if (event.target.files) {
      this.logoImage = event.target.files[0];
      console.log('test image ', this.images);
    }
  }

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

  addNew() {
    this.submitted = true;
      console.log("form data", this.myForm.value);

    if (this.myForm.valid) {
      console.log("form data", this.myForm.value);
      
      const formData = new FormData();

      const body = {
        eventRequest: {
          ...this.myForm.value,
        },
      };

      console.log('evnt req', body.eventRequest);

      const json = JSON.stringify(body.eventRequest);
      console.log('json', json);

      formData.append('data', json);

      formData.append('logo', this.logoImage);

      for (let index = 0; index < this.images.length; index++) {
        let element = this.images[index];
        formData.append('docs[]', element);
      }

      this.generalService.registrationEnterprise(formData).subscribe({
        next: (result: any) => {
          console.log('result', result);
        },
        error: (error: any) => {},
        complete: () => {
          this.submitted = false;
        },
      });
    }
  }
}
