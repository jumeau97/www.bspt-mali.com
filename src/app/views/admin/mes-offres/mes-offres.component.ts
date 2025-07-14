import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-mes-offres',
  templateUrl: './mes-offres.component.html',
  styleUrls: ['./mes-offres.component.scss'],
})
export class MesOffresComponent implements OnInit {
  offers: any;
  user: any;

  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalItems: number = 0;
  totalPages: number = 0;
  searchForm!: FormGroup;

  constructor(private generalService: GeneralService, private fb: FormBuilder) {
    this.getcurrentUser();
    this.searchForm = this.fb.group({});
  }
  ngOnInit(): void {}

  getOffersList(page: number = 1) {
    console.log('user enterprise', this.user);

    const searchCriteria = {
      ...this.searchForm.value,
      enterpriseId:
        this.user.enterprise != null ? this.user.enterprise.id : null,
    };
    {
    }

    this.generalService
      .getOffers({ pageNo: page, pageSize: this.itemsPerPage }, searchCriteria)
      .subscribe({
        next: (result: any) => {
          console.log('result', result.data.items);

          this.offers = result.data.items;

          this.totalItems = result.data.totalItemCount;
          this.itemsPerPage = result.data.itemPerPage;
          this.totalPages = result.data.totalPage;
          this.currentPage = result.data.currentPageNumber;
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
