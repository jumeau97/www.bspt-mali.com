import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-enterprises-partners',
  templateUrl: './enterprises-partners.component.html',
  styleUrls: ['./enterprises-partners.component.scss']
})
export class EnterprisesPartnersComponent {
enterprises: any;

  constructor(private generalService: GeneralService) {
    this.getcurrentUser();
  }
  ngOnInit(): void {}

  getEnterprises(body:any) {
    this.generalService.getEnterprises({}, body).subscribe({
      next: (result: any) => { 
        this.enterprises = result.data.items;
         console.log("enterprises", this.enterprises);
      },
      error: (error: any) => {},
    });
  }

  // utilisateur courant
  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        // console.log('current user', result.user.enterprise.activities.map((activity:any) => activity.slug));

        this.getEnterprises({});
      },
      error: (error: any) => {},
    });
  }
}
