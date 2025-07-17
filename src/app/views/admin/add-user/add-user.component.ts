import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  myForm: FormGroup | any;
  submitted: boolean = false;
  constructor(private generalService: GeneralService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nom: [, [Validators.required]],
      prenom: [, [Validators.required]],
      email: [, [Validators.required, Validators.email]],
    });
  }

  error_messages = {
    nom: [{ type: 'required', message: 'le champs est réquis' }],
    prenom: [{ type: 'required', message: 'le champs est réquis' }],
    email: [
      { type: 'required', message: 'le champs est réquis' },
      { type: 'email', message: 'format invalide' },
    ],
  };
  ngOnInit(): void {}

  addNewUser() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.generalService.addNewUser(this.myForm.value).subscribe({
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
