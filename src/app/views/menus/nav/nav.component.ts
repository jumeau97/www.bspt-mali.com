import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  navbarFixed: boolean = false;
  // Listen for the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Get the position of the scroll
    if (window.pageYOffset > 200) {
      // You can adjust the 100 to your needs
      this.navbarFixed = true;
    } else {
      this.navbarFixed = false;
    }
  }
  activeRoute!: string;

  cmd: MenuItem | undefined;
  // private offcanvasElement!: HTMLElement | null;

  ngOnInit() {}

  // closeOffcanvas() {
  //   this.offcanvasElement = document.getElementById("offcanvasNavbar2");
  //   if (this.offcanvasElement) {
  //     const bsOffcanvas = Offcanvas.getInstance(this.offcanvasElement) || new Offcanvas(this.offcanvasElement);
  //     bsOffcanvas.hide();
  //   }
  // }
  // MenuItems définis avec état "open" pour les sous-menus
  menuItems: MenuItem[] = [
    {
      title: 'Accueil',
      iconClass: 'fas fa-th',
      link: '/',
      open: false,
    },
    {
      title: 'OFFRES',
      iconClass: 'fas fa-list',
      link: '/offer',
      open: false,
    },
    {
      title: 'Qui sommes nous ?',
      iconClass: 'fas fa-list',
      link: '/a-propos-bstp',
      open: false,
    },
    {
      title: 'Adhesion',
      iconClass: 'fas fa-list',
      link: '/devenez-membre',
      open: false,
    },
    // {
    //   title: 'QUI SOMMES NOUS',
    //   iconClass: 'fa fa-snowflake',
    //   link: 'javascript:;',
    //   open: false,
    //   subMenu: [
    //     {
    //       title: 'A propos',
    //       link: 'javascript:;',
    //       open: false,
    //       subMenu: [
    //         { title: 'A propos de BSTP-MALI', link: '/a-propos-bstp' },
    //         { title: 'Historique', link: '/historic' },
    //         { title: 'Ancien Directeur', link: '/ancien-directeur' },
    //         { title: 'Mot du President', link: '/mot-du-president' },
    //         { title: 'Mot du Directeur', link: '/mot-du-directeur' },
    //         { title: 'Étude de 2009', link: '/etude-2009' },
    //       ],
    //     },
    //     {
    //       title: 'Outils',
    //       link: 'javascript:;',
    //       open: false,
    //       subMenu: [
    //         { title: 'Base de donnée', link: 'base-de-donnee' },
    //         {
    //           title: 'Documentation technique',
    //           link: 'documentation-technique',
    //         },
    //         {
    //           title: 'Cartographie des PME/PMI',
    //           link: 'cartographie-des-pme-pmi',
    //         },
    //         {
    //           title: 'Outils de developpement Industriel',
    //           link: 'outils-de-developpement-industriel',
    //         },
    //         { title: 'Applications mobiles', link: 'applications-mobiles' },
    //       ],
    //     },
    //     {
    //       title: 'Documentation',
    //       link: 'javascript:;',
    //       open: false,
    //       subMenu: [
    //         {
    //           title: 'Lois / Ordonnances et Décrets',
    //           link: 'lois-ordonnances-et-decret',
    //         },
    //         { title: 'Codes', link: 'codes' },
    //         { title: 'Décisions', link: 'decisions' },
    //         { title: 'Rapports', link: 'rapports' },
    //         {
    //           title: 'Politiques sectorielles',
    //           link: 'politiques-sectorielles',
    //         },
    //         { title: 'Publications', link: 'publications' },
    //       ],
    //     },
    //     { title: 'La BSTP TEAM', link: '/la-team-bstp', open: false },
    //     { title: 'FAQs', link: '/faqs', open: false },
    //   ],
    // },
    // {
    //   title: 'PROGRAMMES',
    //   link: 'javascript:;',
    //   open: false,
    //   subMenu: [
    //     {
    //       title: "Programme d'amélioration continu",
    //       link: '/programme-amelioration-continu',
    //     },
    //     {
    //       title: 'Programme de Labellisation',
    //       link: '/programmme-labelisation',
    //     },
    //     { title: 'Recensement diagnostic des PME/PMI', link: 'footer-light.html' },
    //     { title: 'Financement de la sous traitance et du contenu local', link: 'footer-light.html' },
    //     { title: 'Charte de la Sous-traitance', link: 'footer-light.html' },
    //   ],
    // },

      {
      title: 'Demandes',
      link: 'javascript:void(0)',
      open: false,
      subMenu: [
        { title: 'Sous-traitance', link: '/sous-traitance' },
        { title: 'Co-traitance', link: '/co-traitance' },
        { title: 'Partenariat', link: '/partenariat' },
      ],
    },


    // {
    //   title: 'DEMANDES & ADHESION',
    //   iconClass: 'fa fa-chevron-down',
    //   link: 'javascript:;',
    //   open: false,
    //   subMenu: [
    //     {
    //       title: 'Demandes',
    //       link: 'javascript:;',
    //       open: false,
    //       subMenu: [
    //         { title: 'Partenariat', link: '/partenariat' },
    //         { title: 'Sous-traitance', link: '/sous-traitance' },
    //         { title: 'Co-traitance', link: '/co-traitance' },
    //       ],
    //     },
    //     {
    //       title: 'Adhésion',
    //       link: 'javascript:;',
    //       open: false,
    //       subMenu: [
    //         { title: 'Pourquoi adhérer', link: '/pourquoi-adherer' },
    //         { title: 'Devenir membre', link: '/devenez-membre' },
    //         { title: 'Déposer vos CV', link: '/deposer-vos-cv' },
    //         {
    //           title: "Poster une offre d'emploi",
    //           link: '/poster-une-offre-emploi',
    //         },
    //       ],
    //     },
    //     { title: 'Guide utilisateur', link: '/guide-utilisateur', open: false },
    //   ],
    // },
    // {
    //   title: 'PRESSE & MEDIA',
    //   iconClass: 'fa fa-chevron-down',
    //   link: 'javascript:;',
    //   open: false,
    //   subMenu: [
    //     {
    //       title: 'Actualités',
    //       link: 'javascript:;',
    //       open: false,
    //       subMenu: [
    //         { title: 'A la une', link: '/a-la-une' },
    //         { title: 'Activités réalisées', link: '/activites-realises' },
    //         { title: 'Activités en cours', link: '/activites-en-cours' },
    //         {
    //           title: 'Environnement économique',
    //           link: 'environnement-economique',
    //         },
    //         { title: 'Secteur privé', link: '/secteur-prive' },
    //         { title: 'Galerie', link: '/galerie' },
    //       ],
    //     },
    //     {
    //       title: 'Évènement',
    //       link: 'javascript:;',
    //       open: false,
    //       subMenu: [
    //         { title: 'Séminaire National', link: '/seminaire-national' },
    //         { title: 'Salons Spécialisés', link: '/salons-specialises' },
    //         {
    //           title: 'Cérémonie de récompense',
    //           link: 'ceremonie-de-recompense',
    //         },
    //         { title: 'Conférences', link: '/conferences' },
    //         { title: 'Webinaires', link: '/webinaires' },
    //         {
    //           title: 'Événements de nos partenaires',
    //           link: 'evenements-de-nos-partenaires',
    //         },
    //         {
    //           title: 'Salon National sur l’industrialisation ',
    //           link: 'evenements-de-nos-partenaires',
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      title: 'CONTACTEZ-NOUS',
      iconClass: '',
      open: false,
      link: '/contact-us',
    },
    {
      title: 'MAPS',
      iconClass: '',
      open: false,
      link: 'javascript:;',
    },
    // Ajoutez d'autres menus ici
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects; // capture la route après les redirections si nécessaire
        console.log('route', this.activeRoute);
        // this.closeOffcanvas();
      }
    });
  }

  // Vérifie si le lien principal est actif
  isActive(link: string): boolean {
    return this.activeRoute === link;
  }

  // Vérifie si un sous-menu ou sous-sous-menu est actif
  hasActiveSubMenu(subMenu: any[]): boolean {
    return subMenu.some((item) => {
      if (item.link === this.activeRoute) {
        return true;
      }
      // Vérifie les sous-menus récursivement
      if (item.subMenu) {
        return this.hasActiveSubMenu(item.subMenu);
      }
      return false;
    });
  }
}
// Interface MenuItem mise à jour pour inclure "open"
interface MenuItem {
  title: string;
  iconClass?: string;
  link: string;
  open?: boolean; // Nouvel attribut pour ouvrir/fermer le menu
  subMenu?: MenuItem[];
}
