import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoremComponent } from './lorem/lorem.component';
import { HomeComponent } from './home/home.component';
import { AppelsDOffreComponent } from './appels-d-offre/appels-d-offre.component';
import { MesOffresComponent } from './mes-offres/mes-offres.component';
import { PublishNewOffersComponent } from './publish-new-offers/publish-new-offers.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivitiesComponent } from './activities/activities.component';
import { EnterprisesPartnersComponent } from './enterprises-partners/enterprises-partners.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'mes-offres', component: MesOffresComponent },
      { path: 'appels-d-offres', component: AppelsDOffreComponent },
      {
        path: 'mes-offres/publish-new-offers',
        component: PublishNewOffersComponent,
      },
      { path: 'users', component: NewUsersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'activites', component: ActivitiesComponent },
      { path: 'enterprises-partners', component: EnterprisesPartnersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
