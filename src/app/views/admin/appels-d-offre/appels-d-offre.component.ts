import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-appels-d-offre',
  templateUrl: './appels-d-offre.component.html',
  styleUrls: ['./appels-d-offre.component.scss'],
})
export class AppelsDOffreComponent {
  offers: any;
  user: any;

  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalItems: number = 0;
  totalPages: number = 0;
  searchForm!: FormGroup;

  constructor(private generalService: GeneralService, private fb: FormBuilder) {
    this.getcurrentUser();

    this.searchForm = this.fb.group({
      //  activities:[["energie"],[]]
    });
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

  getOffersList(page: number = 1) {
    const searchCriteria = {
      ...this.searchForm.value,
      activities: this.user.enterprise
        ? this.user.enterprise.activities.map((activity: any) => activity.slug)
        : null,
    };
    console.log('serach criteria', searchCriteria);

    this.generalService
      .getOffers({ pageNo: page, pageSize: this.itemsPerPage }, searchCriteria)
      .subscribe({
        next: (result: any) => {
          console.log('result', result.data.items);

          this.offers = result.data.items;
          this.totalItems = result.data.totalItemCount;
          console.log('total item', this.totalItems);
          this.itemsPerPage = result.data.itemPerPage;
          console.log('item par page', this.itemsPerPage);

          this.totalPages = result.data.totalPage;
          console.log('total  page', this.totalPages);
          this.currentPage = result.data.currentPageNumber;
          console.log('current Page', this.currentPage);
        },
        error: (error: any) => {},
        complete() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        },
      });
  }

  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        // console.log('current user', result.user.enterprise.activities.map((activity:any) => activity.slug));
        this.user = result.user;
        // var activities = this.user.enterprise
        //   ? this.user.enterprise.activities.map(
        //       (activity: any) => activity.slug
        //     )
        //   : null;
        // console.log('activities', activities);

        this.getOffersList();
      },
      error: (error: any) => {},
    });
  }

  async nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getOffersList(this.currentPage + 1);
    }
  }

  async prevPage() {
    if (this.currentPage > 1) {
      this.getOffersList(this.currentPage - 1);
    }
  }
}
