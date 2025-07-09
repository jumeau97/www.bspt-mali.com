import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss'],
})
export class NewUsersComponent {
  user: any;
  users: any;

  constructor(private generalService: GeneralService) {
    this.getcurrentUser();
  }

  getUsers(body: any) {
    this.generalService.getUsers(body).subscribe({
      next: (result: any) => {
        console.log('users', result.data.items);
        this.users = result.data.items;
      },
      error: (error: any) => {},
    });
  }

  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        console.log('result', result);

        this.user = result.user;
        this.getUsers({
          idEnterprise: this.user.enterprise ? this.user.enterprise.id : null,
        });
      },
      error: (error: any) => {},
    });
  }
}
