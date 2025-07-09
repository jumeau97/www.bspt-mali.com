import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  offer: any;

  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService
  ) {
    this.route.paramMap.subscribe((data: any) => {
      console.log('data', data['params']['id']);
      this.loadOfferByName(data['params']['id']);
    });
  }

  async ngOninit() {
    // await this.loadOfferByName(null);
  }

  async loadOfferByName(idOffer: any) {
    try {
      var result = await this.generalService.getOfferList(
        { pageNo: 1, pageSize: 1000 },
        { id: parseInt(idOffer) }
      );
      if (result.status === 1) {
        console.log(result);

        this.offer = result.data.items['0'];
        console.log('offer', this.offer);
      } else {
      }
    } catch (error) {}
  }
}
