import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BstpAdminRoutingModule } from './bstp-admin-routing.module';
import { BstpAdminComponent } from './bstp-admin.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AppelsDOffresComponent } from './appels-d-offres/appels-d-offres.component';
import { AppelsDOffreComponent } from '../admin/appels-d-offre/appels-d-offre.component';


@NgModule({
  declarations: [
    BstpAdminComponent,
    HomeComponent,
    NavComponent,
    AppelsDOffresComponent,
  ],
  imports: [
    CommonModule,
    BstpAdminRoutingModule
  ]
})
export class BstpAdminModule { }
