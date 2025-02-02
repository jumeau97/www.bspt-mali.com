import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './services/product/product.service';
import { Product } from './model/Product';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  ,
  providers: [NgbCarouselConfig],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  responsiveOptions: any[] | undefined;
  products: Product[] | undefined | any;
  charts = [
    {
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: '',
            data: [3,4,2,5,3,4],
            fill: false,
            borderColor:getComputedStyle(document.documentElement).getPropertyValue('--blue-500'),
            tension: 0,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        aspectRatio: 0,
        plugins: {
          legend: {
            labels: {
              color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: getComputedStyle(document.documentElement).getPropertyValue(
                '--text-color-secondary'
              ),
            },
            grid: {
              color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: getComputedStyle(document.documentElement).getPropertyValue(
                '--text-color-secondary'
              ),
            },
            grid: {
              color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
        },
      },
      otherInfos: {
        "statistic": "100",
        "libelle": "Donneurs d'ordre",
      }
    },
    {
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [
            {
              label: '',
              data: [1,2,3,4,5,6],
              fill: false,
              borderColor:getComputedStyle(document.documentElement).getPropertyValue('--blue-500'),
              tension: 0,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          aspectRatio: 0,
          plugins: {
            legend: {
              labels: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
            y: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
          },
        },
      otherInfos: {
        "statistic": "100",
        "libelle": "Sous-traitants",
      }
      },
      {
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [
            {
              label: '',
              data: [3,4,2,5,3,5],
              fill: false,
              borderColor:getComputedStyle(document.documentElement).getPropertyValue('--blue-500'),
              tension: 0,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          aspectRatio: 0,
          plugins: {
            legend: {
              labels: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
            y: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
          },
        },
        otherInfos: {
          "statistic": "100",
          "libelle": "Fournisseurs miniers",
        }
      },
      {
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [
            {
              label: '',
              data: [1,3,3,4,2,5],
              fill: false,
              borderColor:getComputedStyle(document.documentElement).getPropertyValue('--blue-500'),
              tension: 0,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          aspectRatio: 0,
          plugins: {
            legend: {
              labels: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
            y: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
          },
        },
        otherInfos: {
          "statistic": "100",
          "libelle": "Montant des transactions",
        }
      },
      {
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [
            {
              label: '',
              data: [1,2,3,4,5,6],
              fill: false,
              borderColor:getComputedStyle(document.documentElement).getPropertyValue('--blue-500'),
              tension: 0,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          aspectRatio: 0,
          plugins: {
            legend: {
              labels: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
            y: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
          },
        },
        otherInfos: {
          "statistic": "100",
          "libelle": "Mise en relation",
        }
      },
      {
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [
            {
              label: '',
              data: [1,2,3,4,5,6],
              fill: false,
              borderColor:getComputedStyle(document.documentElement).getPropertyValue('--blue-500'),
              tension: 0,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          aspectRatio: 0,
          plugins: {
            legend: {
              labels: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
            y: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
          },
        },
        otherInfos: {
          "statistic": "100",
          "libelle": "Total des contrats",
        }
      },
      {
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [
            {
              label: '',
              data: [1,2,3,4,5,6],
              fill: false,
              borderColor:getComputedStyle(document.documentElement).getPropertyValue('--blue-500'),
              tension: 0,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          aspectRatio: 0,
          plugins: {
            legend: {
              labels: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
            y: {
              ticks: {
                color: getComputedStyle(document.documentElement).getPropertyValue(
                  '--text-color-secondary'
                ),
              },
              grid: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                drawBorder: false,
              },
            },
          },
        },
        otherInfos: {
          "statistic": "100",
          "libelle": "Total d'emploi crées",
        }
      },
  ];



  
  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    'assets/images/main-slider/slide3_3.jpg',
    'assets/images/main-slider/slide2_2.jpg',
    // "assets/images/main-slider/slider1/slide1.jpg",
    //  "assets/images/main-slider/slider1/slide1.jpg"
  ];

  constructor(
    config: NgbCarouselConfig,
    private productService: ProductService
  ) {
    // this.myChart();
    config.interval = 3000;
    config.wrap = true; // reprendre apres la lecture de tous les images
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation = true;
    config.showNavigationIndicators = false;
    this.productService.getProductsSmall().then((products) => {
        this.products = products;
    });

    this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '1220px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '1100px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  }



 
  ngOninit() {}
}
