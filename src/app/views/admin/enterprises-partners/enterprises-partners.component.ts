import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-enterprises-partners',
  templateUrl: './enterprises-partners.component.html',
  styleUrls: ['./enterprises-partners.component.scss'],
})
export class EnterprisesPartnersComponent {
  enterprises: any;
  user: any;

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
  searchForm!: FormGroup;

  constructor(private generalService: GeneralService, private fb: FormBuilder) {
    this.getcurrentUser();
    this.searchForm = fb.group({});
  }
  ngOnInit(): void {}

  getEnterprises(page: number = 1) {
    const searchCriteria = {
      ...this.searchForm.value,
    };
    this.generalService
      .getEnterprises(
        { pageNo: page, pageSize: this.itemsPerPage },
        searchCriteria
      )
      .subscribe({
        next: (result: any) => {
          this.enterprises = result.data.items;

          this.totalItems = result.data.totalItemCount;
          this.itemsPerPage = result.data.itemPerPage;
          this.totalPages = result.data.totalPage;
          this.currentPage = result.data.currentPageNumber;

          console.log('enterprises', this.enterprises);
        },
        error: (error: any) => {},
      });
  }

  // utilisateur courant
  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        // console.log('current user', result.user.enterprise.activities.map((activity:any) => activity.slug));
        this.user = result.user;

        this.getEnterprises();
      },
      error: (error: any) => {},
    });
  }

  async nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getEnterprises(this.currentPage + 1);
    }
  }

  async prevPage() {
    if (this.currentPage > 1) {
      this.getEnterprises(this.currentPage - 1);
    }
  }
}
