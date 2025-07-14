import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product/product.service';

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
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  responsiveOptions: any[] | undefined;
  products: [] | undefined | any = [
    { name: 'afofrem', logoName: 'afofrem.png', },
    { name: 'api-mali', logoName: 'api-mali.png' },
    { name: 'apsdf', logoName: 'apsfd.png' },
    { name: 'cam', logoName: 'cam.png' },
    { name: 'fenacom', logoName: 'fenacom.png' },
    { name: 'ministere', logoName: 'ministere.png' },
    { name: 'acpm-mali', logoName: 'acpm-mali.png' },
    { name: 'cnpm', logoName: 'cnpm.png' },
    { name: 'douane', logoName: 'douane.png' },
    { name: 'rejom', logoName: 'rejom.png' },
    { name: 'sorem-sa', logoName: 'sorem-sa.png' },
  ];
  charts = [
    {
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: '',
            data: [3, 4, 2, 5, 3, 4],
            fill: false,
            borderColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue('--blue-500'),
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
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color'),
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
        },
      },
      otherInfos: {
        statistic: '100',
        libelle: "Donneurs d'ordre",
      },
    },
    {
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: '',
            data: [1, 2, 3, 4, 5, 6],
            fill: false,
            borderColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue('--blue-500'),
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
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color'),
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
        },
      },
      otherInfos: {
        statistic: '100',
        libelle: 'Sous-traitants',
      },
    },
    {
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: '',
            data: [3, 4, 2, 5, 3, 5],
            fill: false,
            borderColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue('--blue-500'),
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
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color'),
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
        },
      },
      otherInfos: {
        statistic: '100',
        libelle: 'Fournisseurs miniers',
      },
    },
    {
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: '',
            data: [1, 3, 3, 4, 2, 5],
            fill: false,
            borderColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue('--blue-500'),
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
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color'),
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
        },
      },
      otherInfos: {
        statistic: '100',
        libelle: 'Montant des transactions',
      },
    },
    {
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: '',
            data: [1, 2, 3, 4, 5, 6],
            fill: false,
            borderColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue('--blue-500'),
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
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color'),
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
        },
      },
      otherInfos: {
        statistic: '100',
        libelle: 'Mise en relation',
      },
    },
    {
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: '',
            data: [1, 2, 3, 4, 5, 6],
            fill: false,
            borderColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue('--blue-500'),
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
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color'),
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
        },
      },
      otherInfos: {
        statistic: '100',
        libelle: 'Total des contrats',
      },
    },
    {
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: '',
            data: [1, 2, 3, 4, 5, 6],
            fill: false,
            borderColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue('--blue-500'),
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
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color'),
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--text-color-secondary'),
            },
            grid: {
              color: getComputedStyle(
                document.documentElement
              ).getPropertyValue('--surface-border'),
              drawBorder: false,
            },
          },
        },
      },
      otherInfos: {
        statistic: '100',
        libelle: "Total d'emploi crées",
      },
    },
  ];

  ngOnInit() {}
  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    'assets/images/main-slider/slide3_3.jpg',
    'assets/images/main-slider/slide2_2.jpg',
    // "assets/images/main-slider/slider1/slide1.jpg",
    //  "assets/images/main-slider/slider1/slide1.jpg"
  ];

  constructor(
    config: NgbCarouselConfig
  ) {
    // this.myChart();
    config.interval = 3000;
    config.wrap = true; // reprendre apres la lecture de tous les images
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation = true;
    config.showNavigationIndicators = false;
    // this.productService.getProductsSmall().then((products) => {
    //     this.products = products;
    // });

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });
    cards.forEach((card) => observer.observe(card));
  }
}
