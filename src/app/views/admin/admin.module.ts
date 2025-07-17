import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoremComponent } from './lorem/lorem.component';
import { HomeComponent } from './home/home.component';
import { AppelsDOffreComponent } from './appels-d-offre/appels-d-offre.component';
import { MesOffresComponent } from './mes-offres/mes-offres.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PublishNewOffersComponent } from './publish-new-offers/publish-new-offers.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivitiesComponent } from './activities/activities.component';
import { EnterprisesPartnersComponent } from './enterprises-partners/enterprises-partners.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AddUserComponent } from './add-user/add-user.component';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { NewEnterprisePartnersComponent } from './enterprises-partners/new-enterprise-partners/new-enterprise-partners.component';
import { MoreDetailsComponent } from './appels-d-offre/more-details/more-details.component';
import { QuillModule } from 'ngx-quill';
import { SafeHTMLPipe } from '../offres/details/safe-html.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    LoremComponent,
    HomeComponent,
    AppelsDOffreComponent,
    MesOffresComponent,
    PublishNewOffersComponent,
    NewUsersComponent,
    NavComponent,
    ProfileComponent,
    ActivitiesComponent,
    EnterprisesPartnersComponent,
    AddUserComponent,
    NewActivityComponent,
    NewEnterprisePartnersComponent,
    MoreDetailsComponent,
    SafeHTMLPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
        toolbar: [
       
        ],
      },
    }),
    ToastModule,
    ConfirmDialogModule,
  ],
})
export class AdminModule {}
