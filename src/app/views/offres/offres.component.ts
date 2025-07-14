import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';
import { myConstants } from '../utils';
import { ConfirmationService, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent {
  buttonSpinner: boolean = false;
  selectedPlaceId: number = 0;
  recouvreur: any;
  myForm: FormGroup | any;
  position: any = 'center';
  visible: boolean = false;
  isLoading: boolean = false;
  placeList: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
  searchForm!: FormGroup;
  tableDataLoading: boolean = false;
  recouvreurs: any[] = []; // Populate this with your recouvreurs data
  activities: any[] = []; // Populate this with your marchers data
  offers: any[] = []; // Populate this with your marchers data
  user: any;
  imageBaseUrl: string = environment.imagehost;

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

  showDialog(position: string, placeId: number) {
    this.selectedPlaceId = placeId;
    this.position = position;
    this.visible = true;
  }

  constructor(
    private fb: FormBuilder,

    private generalService: GeneralService // private messageService: MessageService,
  ) {
    this.getcurrentUser();
    // this.searchOffer();
    this.searchForm = this.fb.group({
      //  activities:[["electro-mecanique", "btp", "energie"],[]]
    });
  }

  async ngOnInit() {
    this.loadActivities();
  }

  async loadOffers() {
    try {
      var result = await this.generalService.getOfferList(
        { pageNo: 1, pageSize: myConstants.maxLimit },
        {}
      );
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
      var result = await this.generalService.getActivityList(
        1,
        myConstants.maxLimit,
        {}
      );
      if (result.status === 1) {
        console.log(result);

        this.activities = result.data.items;
        console.log('activities', this.activities);
      } else {
      }
    } catch (error) {}
  }

  async searchOffer(page: number = 1) {
    this.tableDataLoading = true;
    const searchCriteria = {
      ...this.searchForm.value,
      enterpriseId: this.user ? this.user.enterprise.id : null,
    };

    console.log('searchoffer offer', searchCriteria);

    try {
      var result = await this.generalService.getOfferList(
        { pageNo: page, pageSize: this.itemsPerPage },
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
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        console.log('current user', result);

        this.user = result.user;
        // this.searchOffer();
      },
      error: (error: any) => {},
      complete: () => {
        console.log('complete user', this.user);
        this.searchOffer();
      }
    });
  }

  async nextPage() {
    if (this.currentPage < this.totalPages) {
      this.searchOffer(this.currentPage + 1);
    }
  }

  async prevPage() {
    if (this.currentPage > 1) {
      this.searchOffer(this.currentPage - 1);
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
