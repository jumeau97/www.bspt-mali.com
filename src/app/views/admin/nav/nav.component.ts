import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class NavComponent {
  activeRoute!: string;
  menuSections: any[] = [];

  constructor(
    private router: Router,
    private generalService: GeneralService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.getcurrentUser();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects; // capture la route après les redirections si nécessaire
        console.log('route', this.activeRoute);
      }
    });
  }
  adminMenus = [
    {
      section: 'Menus principal',
      items: [
        {
          title: 'Accueil',
          iconClass: 'fas fa-home',
          link: `/admin`,
        },
        {
          title: 'Utilisateurs',
          iconClass: 'fas fa-home',
          link: `/admin/users`,
        },
        {
          title: 'Activités',
          iconClass: 'fas fa-home',
          link: `/admin/activites`,
        },
        {
          title: 'Entreprises/partenaires',
          iconClass: 'fas fa-home',
          link: `/admin/enterprises-partners`,
        },
        {
          title: "Appels d'offres",
          iconClass: 'fas fa-list',
          link: `/admin/appels-d-offres`,
        },
        {
          title: 'Mes offres',
          iconClass: 'fas fa-shopping-cart',
          link: '/admin/mes-offres',
        },
      ],
    },
    {
      section: 'Paramètres',
      items: [
        {
          title: 'Mon profil',
          iconClass: 'fas fa-user',
          link: '/admin/profile',
        },
        // {
        //   title: 'Déconnexion',
        //   iconClass: 'fas fa-sign-out-alt',
        //   link: '/logout',
        // },
      ],
    },
  ];

  partnersMenus = [
    {
      section: 'Menus principal',
      items: [
        { title: 'Accueil', iconClass: 'fas fa-home', link: '/admin' },
        {
          title: "Appels d'offres",
          iconClass: 'fas fa-list',
          link: '/admin/appels-d-offres',
        },
        {
          title: 'Mes offres',
          iconClass: 'fas fa-shopping-cart',
          link: '/admin/mes-offres',
        },
      ],
    },
    {
      section: 'Paramètres',
      items: [
        {
          title: 'Mon profil',
          iconClass: 'fas fa-user',
          link: '/admin/profile',
        },
        // {
        //   title: 'Déconnexion',
        //   iconClass: 'fas fa-sign-out-alt',
        //   link: '/logout',
        // },
      ],
    },
  ];

  // Vérifie si le lien principal est actif
  isActive(link: string): boolean {
    if (link === '/admin') {
      return this.activeRoute === '/admin';
    }
    return this.activeRoute.startsWith(link);
  }

  // utilisateur courant
  getcurrentUser() {
    this.generalService.getCurrentUser().subscribe({
      next: (result: any) => {
        // console.log('current user', result.user.enterprise.activities.map((activity:any) => activity.slug));

        this.menuSections = this.adminMenus;
      },
      error: (error: any) => {},
    });
  }

  disconnect(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message:
        'Cette action vous fera quitter la plateforme. <br/> Souhaitez-vous continuer ?',
      acceptLabel: 'Oui',
      rejectLabel: 'Annuler',
      header: 'Déconnexion ',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'btn btn-danger',
      acceptButtonStyleClass: 'btn btn-primary',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
        sessionStorage.removeItem('bstp-agent');
        this.router.navigateByUrl('/');
      },
      reject: () => {
        // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      },
    });
  }

  logout() {}
}
