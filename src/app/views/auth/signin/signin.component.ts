import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';
import { myConstants } from '../../utils';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public showPassword!: boolean;
  public showPasswordOnPress!: boolean;
  myForm: FormGroup | any;
  submitted: boolean = false;
  buttonSpinner: boolean = false;
  encodedObject: string = '';
  isLoading: boolean = false;
  authErrorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private generalService: GeneralService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  error_messages = {
    username: [
      { type: 'required', message: "L'email est obligatoire." },
      { type: 'email', message: "L'email invalide" },
    ],
    password: [
      { type: 'required', message: 'Le mot de passe est obligatoire.' },
      {
        type: 'minlength',
        message: 'Le mot de passe doit être au moins de 3 caractères',
      },
    ],
  };
  ngOnInit(): void {}

  login() {
    console.log(this.myForm.value);

    this.submitted = true;
    if (this.myForm.valid) {
      this.isLoading = true;
      this.generalService.login(this.myForm.value).subscribe({
        next: (result: any) => {
          console.log('result', result.status);

          if (result.status == 1) {
            console.log('conected..');

            const jsonString = JSON.stringify(result.token);
            const encryptedData = CryptoJS.AES.encrypt(
              jsonString,
              myConstants.password
            ).toString();
            // localStorage.setItem("encryptedData", encryptedData);
            console.log('json :', encryptedData);
            sessionStorage.setItem('bstp-agent', encryptedData);
            this.isLoading = false;
            this.router.navigate(['/admin']);
          } else {
            this.isLoading = false;
            this.authErrorMessage = result.message;
          }
        },
        error: (error: any) => {
          this.isLoading = false;
          this.authErrorMessage = error.error.message;
        },
      });
    }
    this.buttonSpinner = false;
  }
}
