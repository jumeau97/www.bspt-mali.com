import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss'],
})
export class NewUsersComponent {
  user: any;
  users: any;

  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalItems: number = 0;
  totalPages: number = 0;
  searchForm!: FormGroup;

  constructor(private generalService: GeneralService, private fb: FormBuilder) {
    this.getcurrentUser();
    this.searchForm = this.fb.group({});
  }

  getUsers(page: number = 1) {
    const searchCriteria = {
      ...this.searchForm.value,
      idEnterprise: this.user.enterprise ? this.user.enterprise.id : null,
    };
    this.generalService
      .getUsers({ page: page, limit: this.itemsPerPage }, searchCriteria)
      .subscribe({
        next: (result: any) => {
          console.log('users', result.data.items);
          this.users = result.data.items;

          this.totalItems = result.data.totalItemCount;
          this.itemsPerPage = result.data.itemPerPage;
          this.totalPages = result.data.totalPage;
          this.currentPage = result.data.currentPageNumber;
        },
        error: (error: any) => {},
      });
  }

  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        console.log('result', result);

        this.user = result.user;
        this.getUsers();
      },
      error: (error: any) => {},
    });
  }

  async nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getUsers(this.currentPage + 1);
    }
  }

  async prevPage() {
    if (this.currentPage > 1) {
      this.getUsers(this.currentPage - 1);
    }
  }
}
