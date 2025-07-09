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
  ],
  imports: [CommonModule, AdminRoutingModule, NgSelectModule, ReactiveFormsModule],
})
export class AdminModule {}
