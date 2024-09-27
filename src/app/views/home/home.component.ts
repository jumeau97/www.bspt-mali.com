import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(2000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class HomeComponent{
  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    "assets/images/main-slider/slide3_3.jpg",
    "assets/images/main-slider/slide2_2.jpg",
    // "assets/images/main-slider/slider1/slide1.jpg",
    //  "assets/images/main-slider/slider1/slide1.jpg"
    ]

  constructor(config: NgbCarouselConfig){
    config.interval = 5000;
		config.wrap = true; // reprendre apres la lecture de tous les images
		config.keyboard = false;
		config.pauseOnHover = false;
    config.animation= true;
    config.showNavigationIndicators=false;

    
  }

}
