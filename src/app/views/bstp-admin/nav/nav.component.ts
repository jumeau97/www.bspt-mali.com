import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general/general.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  activeRoute!: string;

  constructor(private router: Router, private generalService: GeneralService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects; // capture la route après les redirections si nécessaire
        console.log('route', this.activeRoute);
        // this.closeOffcanvas();
      }
    });
  }

  menuSections = [
    {
      section: 'Menus principal',
      items: [
        {
          title: 'Accueil',
          iconClass: 'fas fa-home',
          link: `/bstp-admin`,
        },
         {
          title: 'Utilisateurs',
          iconClass: 'fas fa-home',
          link: `/bstp-admin/users`,
        },
           {
          title: 'Activités',
          iconClass: 'fas fa-home',
          link: `/bstp-admin/activites`,
        },
          {
          title: 'Entreprises/partenaires',
          iconClass: 'fas fa-home',
          link: `/bstp-admin/enterprises-partners`,
        },
        {
          title: "Appels d'offres",
          iconClass: 'fas fa-list',
          link: `/bstp-admin/appels-d-offres`,
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

  generateUrl() {
    const myUuid = uuidv4();
    return myUuid;
  }
}
