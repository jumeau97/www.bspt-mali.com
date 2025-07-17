import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general/general.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss'],
})
export class MoreDetailsComponent {
  detailsOffer:any;
  imageHost=environment.imagehost;
  constructor(
    private activatedRoute: ActivatedRoute,
    private generalService: GeneralService
  ) {
    activatedRoute.params.subscribe({
      next: (result: any) => {
        console.log('params', result['id']);

        let data = atob(result['id']);

        let jsonData = JSON.parse(data);
        console.log('data', jsonData);
        this.findOfferByCriteria(parseInt(data))
      },
      error: (error: any) => {},
    });
  }

  findOfferByCriteria(idOffer:number) {
    this.generalService.getOffers({ pageSize: 1 }, {id:idOffer}).subscribe({
      next: (result: any) => {
        console.log('result', result);
        this.detailsOffer = result.data.items[0];
        console.log("details offer", this.detailsOffer);
        
      },
      error: (error: any) => {
        console.log('error', error);
      },
    });
  }
}
