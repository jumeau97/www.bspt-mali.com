import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';
import { myConstants } from '../utils';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent {
  buttonSpinner: boolean=false;
  selectedPlaceId: number=0;
  recouvreur: any;
  myForm: FormGroup | any;
  position: any = 'center';
  visible: boolean = false;
  isLoading: boolean = false;
  placeList: any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
  searchForm!: FormGroup;
  tableDataLoading: boolean = false;
  recouvreurs: any[] = []; // Populate this with your recouvreurs data
  activities: any[] = []; // Populate this with your marchers data
  offers: any[] = []; // Populate this with your marchers data
  // paymentStatuses = [
  //   { value: 'PAYED', label: 'Payé' },
  //   { value: 'NOT_PAYED', label: 'Non Payé' },
  //   { value: 'ALL', label: 'Tout' },
  // ];

  offerStaus: offerStatus[] = [
    {
      value: 'ALL',
      label: 'Tout',
    },
    {
      value: 'IN_PROGRESS',
      label: 'En cours',
    },
    {
      value: 'EXPIRED',
      label: 'Expiré',
    },
  ];



  showDialog(position: string, placeId:number) {
    this.selectedPlaceId = placeId;
    this.position = position;
    this.visible = true;
  }

  constructor(
    private fb: FormBuilder,

    private generalService: GeneralService,
    // private messageService: MessageService,
  ) {
    // const userInfos = authService.getUserInfos();
    // this.roleUser = userInfos.data.roles;

    this.searchForm = this.fb.group({
      // isRecouAff: ['ALL'],
      offerStatus: ['ALL'],
      activityId: [null],
      // marchand: [null],
    });
    this.myForm = this.fb.group({
      // id: [this.placeId, [Validators.required]],
      recouvreur:[this.recouvreur, [Validators.required]]
    
    });
  }



  async loadOffers() {
    try {
      var result = await this.generalService.getOfferList({pageNo:1, pageSize:myConstants.maxLimit}, {});
      if (result.status === 1) {
        console.log(result);
        
        this.offers = result.data.items;
        console.log('offers', this.offers);
      } else {
      }
    } catch (error) {}
  }

  async loadActivities() {
    try {
      var result = await this.generalService.getActivityList(1, myConstants.maxLimit, {});
      if (result.status === 1) {
        console.log(result);
        
        this.activities = result.data.items;
        console.log('activities', this.activities);
      } else {
      }
    } catch (error) {}
  }


  async ngOnInit() {
    await this.searchOffer();
    // await this.loadOffers();
    await this.loadActivities();

  }

  async searchOffer(page: number = 1) {
   console.log("searchoffer",  this.searchForm.value);
   
    this.tableDataLoading = true;
    const searchCriteria = {
      ...this.searchForm.value,
      page: page,
      limit: this.itemsPerPage,
    };

    // if (searchCriteria.isRecouAff === 'ALL') {
    //   delete searchCriteria.isPay;
    // }

    try {
      var result = await this.generalService.getOfferList(
       {pageNo: page,
        pageSize: this.itemsPerPage},
        searchCriteria
      );
      console.log('result: ', result);

      if (result.status === 1) {
        this.offers = result.data.items;
        this.totalItems = result.data.totalItemCount;
        this.itemsPerPage = result.data.itemPerPage;
        this.totalPages = result.data.totalPage;
        this.currentPage = result.data.currentPageNumber;
      } else {
        // this.showTopCenter('error', 'Error', result.message);
        console.log('error');
      }
    } catch (error) {
      console.error('Error:', error);
      // this.showTopCenter('error', 'Error', 'Failed to fetch tickets');
    } finally {
      this.tableDataLoading = false;
    }
  }

  async nextPage() {
    if (this.currentPage < this.totalPages) {
      await this.searchOffer(this.currentPage + 1);
    }
  }

  async prevPage() {
    if (this.currentPage > 0) {
      await this.searchOffer(this.currentPage - 1);
    }
  }

  checkLimitDate(myDate: any): string {
    const date = new Date(myDate).getTime(); // conversion en timestamp

    if (date <= Date.now()) {
      return 'EXPIRÉ';
    } else {
      return 'EN COURS';
    }
  }

}



export class offerStatus {
  value!: string;
  label!: string;
}
