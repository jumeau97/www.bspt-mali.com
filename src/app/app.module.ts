import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule,
     CountUpModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
