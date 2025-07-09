import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user: any;
  activateProfilButton: string = 'infos';
  accountForm!: FormGroup;
  passForm!: FormGroup;

  constructor(private generalService: GeneralService, private fb: FormBuilder) {
    this.getcurrentUser();
    this.accountForm = fb.group({
      firstName: [],
      lastName: [],
      email: [],
    });

    this.passForm = fb.group({
      oldPassword: [],
      newPassword: [],
      confirmPassword: [],
    });
  }

  menus = [
    {
      title: 'Mon compte',
      link: 'infos',
    },
    {
      title: 'Changement de mot de passe',
      link: 'password',
    },
  ];

  showPage(link: any) {
    console.log('link', link);

    this.activateProfilButton = link;
  }
  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        console.log('result', result);
        this.user = result.user;
        
        // update form information 
        this.accountForm.setValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
        });
      },
      error: (error: any) => {},
    });
  }
}
