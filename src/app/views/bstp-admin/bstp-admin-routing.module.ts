import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppelsDOffreComponent } from '../admin/appels-d-offre/appels-d-offre.component';


const routes: Routes = [
   { path: '', redirectTo: '', pathMatch: 'full' },
    {
      path: '',
      children: [
        { path: '', component: HomeComponent },
        { path: 'appels-d-offres', component: AppelsDOffreComponent },
        { path: 'mes-offres', component: HomeComponent },
      
      ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BstpAdminRoutingModule { }
