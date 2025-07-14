import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  activities: any;

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
  searchForm!: FormGroup;
  user: any;

  constructor(private generalService: GeneralService, private fb: FormBuilder) {
    this.getcurrentUser();
    this.searchForm = this.fb.group({});
  }
  ngOnInit(): void {}

  getActivities(page: number = 1) {
    const searchCriteria = {
      ...this.searchForm.value,
    };
    this.generalService
      .getActivities({ page: page, limit: this.itemsPerPage }, searchCriteria)
      .subscribe({
        next: (result: any) => {
          this.activities = result.data.items;

          this.totalItems = result.data.totalItemCount;
          this.itemsPerPage = result.data.itemPerPage;
          this.totalPages = result.data.totalPage;
          this.currentPage = result.data.currentPageNumber;

          console.log('activites', this.activities);
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
        this.getActivities();
      },
      error: (error: any) => {},
    });
  }

  async nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getActivities(this.currentPage + 1);
    }
  }

  async prevPage() {
    if (this.currentPage > 1) {
      this.getActivities(this.currentPage - 1);
    }
  }
}
