import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  activities: any;

  constructor(private generalService: GeneralService) {
    this.getcurrentUser();
  }
  ngOnInit(): void {}

  getActivities(body:any) {
    this.generalService.getActivities({}, body).subscribe({
      next: (result: any) => { 
        this.activities = result.data.items;
         console.log("activites", this.activities);
      },
      error: (error: any) => {},
    });
  }

  // utilisateur courant
  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        // console.log('current user', result.user.enterprise.activities.map((activity:any) => activity.slug));

        this.getActivities({});
      },
      error: (error: any) => {},
    });
  }
}
