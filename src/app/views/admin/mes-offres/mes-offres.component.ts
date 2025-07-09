import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-mes-offres',
  templateUrl: './mes-offres.component.html',
  styleUrls: ['./mes-offres.component.scss'],
})
export class MesOffresComponent implements OnInit {
  offers: any;
  user: any;

  constructor(private generalService: GeneralService) {
    this.getcurrentUser();
  }
  ngOnInit(): void {}

  getOffersList(body: any) {
    this.generalService.getOffers({}, body).subscribe({
      next: (result: any) => {
        console.log('result', result.data.items);
        this.offers = result.data.items;
      },
      error: (error: any) => {},
    });
  }

  checkLimitDate(myDate: any): string {
    const date = new Date(myDate).getTime(); // conversion en timestamp

    if (date <= Date.now()) {
      return 'EXPIRÉ';
    } else {
      return 'EN COURS';
    }
  }

  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        console.log('result', result);

        this.user = result.user;
        this.getOffersList({
          enterpriseId:
            this.user.enterprise != null ? this.user.enterprise.id : null,
        });
      },
      error: (error: any) => {},
    });
  }
}
