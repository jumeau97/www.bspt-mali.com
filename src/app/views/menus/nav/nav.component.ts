import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  activeRoute!: string;
  // menuItems: MenuItem[] = [];
  cmd: MenuItem | undefined;
  // menuItems : MenuItem[] = [
  //   {
  //     title: 'Accueil',
  //     iconClass: 'fas fa-th',
  //     link: '/',
  //   },
  //   {
  //     title: 'OFFRES',
  //     iconClass: 'fas fa-list',
  //     link: '/offer',
  //   },
  //   {
  //     title: 'QUI SOMMES NOUS',
  //     iconClass: 'fa fa-snowflake',
  //     link: 'javascript:;',
  //     subMenu: [
  //      {
  //       title: 'A propos',
  //       link: 'javascript:;',
  //       subMenu: [
  //         { title: 'A propos de BSTP-MALI', link: 'a-propos-bstp' },
  //         { title: 'Historique', link: 'historic' },
  //         { title: 'Ancien Directeur', link: 'ancien-directeur' },
  //         { title: 'Mot du President', link: 'mot-du-president' },
  //         { title: 'Mot du Directeur', link: 'mot-du-directeur' },
  //         { title: 'Étude de 2009', link: 'services-detail.html' }
  //       ],
  //      },
  //       {
  //         title: 'Outils',
  //         link: 'javascript:;',
  //         subMenu: [
  //           { title: 'Base de donnée', link: 'services-detail.html' },
  //           { title: 'Documentation technique', link: 'services-detail.html' },
  //           { title: 'Cartographie des PME/PMI', link: 'services-detail.html' },
  //           { title: 'Outils de developpement Industriel', link: 'services-detail.html' },
  //           { title: 'Applications mobiles', link: 'services-detail.html' }
  //         ]
  //       },
  //       {
  //         title: 'Documentation',
  //         link: 'javascript:;',
  //         subMenu: [
  //           { title: 'Lois / Ordonnances et Décrets', link: 'services-detail.html' },
  //           { title: 'Codes', link: 'services-detail.html' },
  //           { title: 'Décisions', link: 'services-detail.html' },
  //           { title: 'Rapports', link: 'services-detail.html' },
  //           { title: 'Politiques sectorielles', link: 'services-detail.html' },
  //           { title: 'Publications', link: 'services-detail.html' }
  //         ]
  //       }
  //     ],

  //   },
  //   {
  //     title: 'PROGRAMMES',
  //     link: 'javascript:;',
  //     subMenu: [
  //       { title: 'Programme d\'amélioration continu', link: 'programme-amelioration-continu' },
  //       { title: 'Programme de Labellisation', link: 'footer-fixed.html' },
  //       { title: 'Recensement diagnostic', link: 'footer-light.html' }
  //     ]
  //   },
  //   {
  //     title: 'DEMANDES & ADHESION',
  //     iconClass: 'fa fa-chevron-down',
  //     link: 'javascript:;',
  //     subMenu: [
  //       {
  //         title: 'Demandes',
  //         link: 'javascript:;',
  //         subMenu: [
  //           { title: 'Parténariat', link: 'services-detail.html' },
  //           { title: 'Sous-traitance', link: 'services-detail.html' },
  //           { title: 'Co-traitance', link: 'services-detail.html' }
  //         ]
  //       },
  //       {
  //         title: 'Adhésion',
  //         link: 'javascript:;',
  //         subMenu: [
  //           { title: 'Pourquoi adhérer', link: 'services-detail.html' },
  //           { title: 'Devenez membre', link: 'services-detail.html' },
  //           { title: 'Formulaire d\'adhésion', link: 'services-detail.html' },
  //           { title: 'Déposer vos CV', link: 'services-detail.html' },
  //           { title: 'Poster une offre d\'emploi', link: 'services-detail.html' }
  //         ]
  //       },
  //       { title: 'Guide utilisateur', link: 'blog-list.html' }
  //     ]
  //   },
  //   {
  //     title: 'PRESSE & MEDIA',
  //     iconClass: 'fa fa-chevron-down',
  //     link: 'javascript:;',
  //     subMenu: [
  //       {
  //         title: 'Actualités',
  //         subMenu: [
  //           { title: 'A la une', link: 'blog-list.html' },
  //           { title: 'Activités réalisées', link: 'blog-list-sidebar.html' },
  //           { title: 'Activités en cours', link: 'blog-list-sidebar.html' },
  //           { title: 'Environnement économique', link: 'blog-grid.html' },
  //           { title: 'Secteur privé', link: 'blog-grid-sidebar.html' },
  //           { title: 'Galerie', link: 'blog-post.html' }
  //         ]
  //       },
  //       {
  //         title: 'Évènement',
  //         subMenu: [
  //           { title: 'Séminaire National', link: 'portfolio-1.html' },
  //           { title: 'Salons Spécialisés', link: 'portfolio-2.html' },
  //           { title: 'Cérémonie de récompense', link: 'portfolio-3.html' },
  //           { title: 'Conférences', link: 'portfolio-3.html' },
  //           { title: 'Webinaires', link: 'portfolio-3.html' },
  //           { title: 'Événements de nos partenaires', link: 'portfolio-3.html' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: 'CONTACTEZ-NOUS',
  //     iconClass: '',
  //     link: 'javascript:;'
  //   },
  //   {
  //     title: 'MAPS',
  //     iconClass: '',
  //     link: 'javascript:;'
  //   }

  // ];
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
      title: 'QUI SOMMES NOUS',
      iconClass: 'fa fa-snowflake',
      link: 'javascript:;',
      open: false,
      subMenu: [
        {
          title: 'A propos',
          link: 'javascript:;',
          open: false,
          subMenu: [
            { title: 'A propos de BSTP-MALI', link: 'a-propos-bstp' },
            { title: 'Historique', link: 'historic' },
            { title: 'Ancien Directeur', link: 'ancien-directeur' },
            { title: 'Mot du President', link: 'mot-du-president' },
            { title: 'Mot du Directeur', link: 'mot-du-directeur' },
            { title: 'Étude de 2009', link: 'etude-2009' },
          ],
        },
        {
          title: 'Outils',
          link: 'javascript:;',
          open: false,
          subMenu: [
            { title: 'Base de donnée', link: 'base-de-donnee' },
            {
              title: 'Documentation technique',
              link: 'documentation-technique',
            },
            {
              title: 'Cartographie des PME/PMI',
              link: 'cartographie-des-pme-pmi',
            },
            {
              title: 'Outils de developpement Industriel',
              link: 'outils-de-developpement-industriel',
            },
            { title: 'Applications mobiles', link: 'applications-mobiles' },
          ],
        },
        {
          title: 'Documentation',
          link: 'javascript:;',
          open: false,
          subMenu: [
            {
              title: 'Lois / Ordonnances et Décrets',
              link: 'lois-ordonnances-et-decret',
            },
            { title: 'Codes', link: 'codes' },
            { title: 'Décisions', link: 'decisions' },
            { title: 'Rapports', link: 'rapports' },
            {
              title: 'Politiques sectorielles',
              link: 'politiques-sectorielles',
            },
            { title: 'Publications', link: 'publications' },
          ],
        },
        { title: 'La BSTP TEAM', link: 'la-team-bstp', open: false },
        { title: 'FAQs', link: 'faqs', open: false },
      ],
    },
    {
      title: 'PROGRAMMES',
      link: 'javascript:;',
      open: false,
      subMenu: [
        {
          title: "Programme d'amélioration continu",
          link: 'programme-amelioration-continu',
        },
        {
          title: 'Programme de Labellisation',
          link: 'programmme-labelisation',
        },
        { title: 'Recensement diagnostic', link: 'footer-light.html' },
      ],
    },
    {
      title: 'DEMANDES & ADHESION',
      iconClass: 'fa fa-chevron-down',
      link: 'javascript:;',
      open: false,
      subMenu: [
        {
          title: 'Demandes',
          link: 'javascript:;',
          open: false,
          subMenu: [
            { title: 'Parténariat', link: 'partenariat' },
            { title: 'Sous-traitance', link: 'sous-traitance' },
            { title: 'Co-traitance', link: 'co-traitance' },
          ],
        },
        {
          title: 'Adhésion',
          link: 'javascript:;',
          open: false,
          subMenu: [
            { title: 'Pourquoi adhérer', link: 'pourquoi-adherer' },
            { title: 'Devenez membre', link: 'devenez-membre' },
            // { title: 'Formulaire d\'adhésion', link: 'formulaire-adhesion' },
            { title: 'Déposer vos CV', link: 'deposer-vos-cv' },
            {
              title: "Poster une offre d'emploi",
              link: 'poster-une-offre-emploi',
            },
          ],
        },
        { title: 'Guide utilisateur', link: 'guide-utilisateur', open: false },
      ],
    },
    {
      title: 'PRESSE & MEDIA',
      iconClass: 'fa fa-chevron-down',
      link: 'javascript:;',
      open: false,
      subMenu: [
        {
          title: 'Actualités',
          link: 'javascript:;',
          open: false,
          subMenu: [
            { title: 'A la une', link: 'a-la-une' },
            { title: 'Activités réalisées', link: 'activites-realises' },
            { title: 'Activités en cours', link: 'activites-en-cours' },
            {
              title: 'Environnement économique',
              link: 'environnement-economique',
            },
            { title: 'Secteur privé', link: 'secteur-prive' },
            { title: 'Galerie', link: 'galerie' },
          ],
        },
        {
          title: 'Évènement',
          link: 'javascript:;',
          open: false,
          subMenu: [
            { title: 'Séminaire National', link: 'seminaire-national' },
            { title: 'Salons Spécialisés', link: 'salons-specialises' },
            {
              title: 'Cérémonie de récompense',
              link: 'ceremonie-de-recompense',
            },
            { title: 'Conférences', link: 'conferences' },
            { title: 'Webinaires', link: 'webinaires' },
            {
              title: 'Événements de nos partenaires',
              link: 'evenements-de-nos-partenaires',
            },
          ],
        },
      ],
    },
    {
      title: 'CONTACTEZ-NOUS',
      iconClass: '',
      open: false,
      link: 'javascript:;',
    },
    {
      title: 'MAPS',
      iconClass: '',
      open: false,
      link: 'javascript:;',
    },
    // Ajoutez d'autres menus ici
  ];

  // Fonction pour basculer l'état "open" du menu ou sous-menu
  // toggleMenu(menu: MenuItem) {
  //   menu.open = !menu.open;
  //   console.log("menu open", menu.open);

  // }

  constructor(private router: Router) {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.activeRoute = event.url;
    //     console.log('route', this.activeRoute);
    //   }
    // });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects; // capture la route après les redirections si nécessaire
        console.log('route', this.activeRoute);
      }
    });
  }

  // Vérifie si le lien principal est actif
  isActive(link: string): boolean {
    // return this.activeRoute.includes(link);
    return this.activeRoute === link;
  }

  // Vérifie si un sous-menu ou sous-sous-menu est actif
  hasActiveSubMenu(subMenu: any[]): boolean {
    return subMenu.some((item) => {
      if (item.link === this.activeRoute.substring(1)) {
        return true;
      }
      // Vérifie les sous-menus récursivement
      if (item.subMenu) {
        return this.hasActiveSubMenu(item.subMenu);
      }
      return false;
    });
  }

  // startWith(activeRoute: string, subItemLink: string) {
  //   let result = activeRoute.startsWith(subItemLink);
  //   return result;
  // }
}
// Interface MenuItem mise à jour pour inclure "open"
interface MenuItem {
  title: string;
  iconClass?: string;
  link: string;
  open?: boolean; // Nouvel attribut pour ouvrir/fermer le menu
  subMenu?: MenuItem[];
}
// export class MenuItem{
//   title?: string;
//   iconClass?: string;
//   badge?: string;
//   link?: string;
//   expanded?: boolean;
//   subMenu?: SubSubItem[];

// }

// export class SubSubItem {
//   title?: string;
//   link?: string;
//   subMenu?: MenuItem[];
// }
