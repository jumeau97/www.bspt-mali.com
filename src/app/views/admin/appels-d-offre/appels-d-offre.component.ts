import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-appels-d-offre',
  templateUrl: './appels-d-offre.component.html',
  styleUrls: ['./appels-d-offre.component.scss'],
})
export class AppelsDOffreComponent {
  offers: any;
  user: any;

  constructor(private generalService: GeneralService) {
    this.getcurrentUser();
  }
  ngOnInit(): void {}

  checkLimitDate(myDate: any): string {
    const date = new Date(myDate).getTime(); // conversion en timestamp

    if (date <= Date.now()) {
      return 'EXPIRÉ';
    } else {
      return 'EN COURS';
    }
  }

  getOffersList(body: any) {
    this.generalService.getOffers({}, body).subscribe({
      next: (result: any) => {
        console.log('result', result.data.items);
        this.offers = result.data.items;
      },
      error: (error: any) => {},
    });
  }

  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        // console.log('current user', result.user.enterprise.activities.map((activity:any) => activity.slug));
        this.user = result.user;
        var activities = this.user.enterprise
          ? this.user.enterprise.activities.map(
              (activity: any) => activity.slug
            )
          : null;
        console.log('activities', activities);

        this.getOffersList({ activities: activities });
      },
      error: (error: any) => {},
    });
  }
}
