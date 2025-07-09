import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { OffresComponent } from './views/offres/offres.component';
import { AProposBstpComponent } from './views/qui-sommes-nous/a-propos/a-propos-bstp/a-propos-bstp.component';
import { HistoriqueComponent } from './views/qui-sommes-nous/a-propos/historique/historique.component';
import { AncienDirecteurComponent } from './views/qui-sommes-nous/a-propos/ancien-directeur/ancien-directeur.component';
import { MotDuDirecteurComponent } from './views/qui-sommes-nous/a-propos/mot-du-directeur/mot-du-directeur.component';
import { MotDuPresidentComponent } from './views/qui-sommes-nous/a-propos/mot-du-president/mot-du-president.component';
import { ApplicationMobileComponent } from './views/qui-sommes-nous/outils/application-mobile/application-mobile.component';
import { BaseDeDonneeComponent } from './views/qui-sommes-nous/outils/base-de-donnee/base-de-donnee.component';
import { CartographiePmePmiComponent } from './views/qui-sommes-nous/outils/cartographie-pme-pmi/cartographie-pme-pmi.component';
import { DocumentationTechniqueComponent } from './views/qui-sommes-nous/outils/documentation-technique/documentation-technique.component';
import { OutilsDeveloppementIndustrielComponent } from './views/qui-sommes-nous/outils/outils-developpement-industriel/outils-developpement-industriel.component';
import { CodesComponent } from './views/qui-sommes-nous/documentation/codes/codes.component';
import { DecisionsComponent } from './views/qui-sommes-nous/documentation/decisions/decisions.component';
import { LoisOrdonancesDecretComponent } from './views/qui-sommes-nous/documentation/lois-ordonances-decret/lois-ordonances-decret.component';
import { PublicationsComponent } from './views/qui-sommes-nous/documentation/publications/publications.component';
import { RapportsComponent } from './views/qui-sommes-nous/documentation/rapports/rapports.component';
import { ProgrammeAmeliorationContinuComponent } from './views/programmmes/programme-amelioration-continu/programme-amelioration-continu.component';
import { ProgrammeLabelisationComponent } from './views/programmmes/programme-labelisation/programme-labelisation.component';
import { RecensementDiagnosticComponent } from './views/programmmes/recensement-diagnostic/recensement-diagnostic.component';
import { Etude2009Component } from './views/qui-sommes-nous/a-propos/etude-2009/etude-2009.component';
import { LaTeamBstpComponent } from './views/qui-sommes-nous/la-team-bstp/la-team-bstp.component';
import { FaqsComponent } from './views/qui-sommes-nous/faqs/faqs.component';
import { TeamDetailComponent } from './views/qui-sommes-nous/la-team-bstp/team-detail/team-detail.component';
import { PartenariatComponent } from './views/demande-et-adhesion/demandes/partenariat/partenariat.component';
import { CoTraitanceComponent } from './views/demande-et-adhesion/demandes/co-traitance/co-traitance.component';
import { SousTraitanceComponent } from './views/demande-et-adhesion/demandes/sous-traitance/sous-traitance.component';
import { DeposerVosCvComponent } from './views/demande-et-adhesion/adhesion/deposer-vos-cv/deposer-vos-cv.component';
import { DevenezMembreComponent } from './views/demande-et-adhesion/adhesion/devenez-membre/devenez-membre.component';
import { FormulaireAdhesionComponent } from './views/demande-et-adhesion/adhesion/formulaire-adhesion/formulaire-adhesion.component';
import { PosterUneOffreEmploiComponent } from './views/demande-et-adhesion/adhesion/poster-une-offre-emploi/poster-une-offre-emploi.component';
import { PourquoiAdhererComponent } from './views/demande-et-adhesion/adhesion/pourquoi-adherer/pourquoi-adherer.component';
import { CeremonieDeRecompenseComponent } from './views/presse-et-media/evenement/ceremonie-de-recompense/ceremonie-de-recompense.component';
import { ConferencesComponent } from './views/presse-et-media/evenement/conferences/conferences.component';
import { EvenementDeNosPartenairesComponent } from './views/presse-et-media/evenement/evenement-de-nos-partenaires/evenement-de-nos-partenaires.component';
import { SalonsSpecialisesComponent } from './views/presse-et-media/evenement/salons-specialises/salons-specialises.component';
import { SeminaireNationalComponent } from './views/presse-et-media/evenement/seminaire-national/seminaire-national.component';
import { WebinairesComponent } from './views/presse-et-media/evenement/webinaires/webinaires.component';
import { ALaUneComponent } from './views/presse-et-media/actualites/a-la-une/a-la-une.component';
import { ActivitesEnCoursComponent } from './views/presse-et-media/actualites/activites-en-cours/activites-en-cours.component';
import { ActivitesRealisesComponent } from './views/presse-et-media/actualites/activites-realises/activites-realises.component';
import { EnvironnementEconomiqueComponent } from './views/presse-et-media/actualites/environnement-economique/environnement-economique.component';
import { GalerieComponent } from './views/presse-et-media/actualites/galerie/galerie.component';
import { SecteurPriveComponent } from './views/presse-et-media/actualites/secteur-prive/secteur-prive.component';
import { GuideUtilisateurComponent } from './views/demande-et-adhesion/guide-utilisateur/guide-utilisateur.component';
import { ActualiteDetailsComponent } from './views/presse-et-media/actualites/actualite-details/actualite-details.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { TestComponent } from './views/test/test.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DetailsComponent } from './views/offres/details/details.component';

const routes: Routes = [

  // { path: '', redirectTo: 'home', pathMatch: 'full' },


  { path: '', component: HomeComponent},

  //offres
  { path: 'offer', component: OffresComponent },
  { path: 'offer-details/:id', component: DetailsComponent },

  //  ====================================================Menu: Qui sommes nous=============================================================
  // SubMenu: A-propos
  { path: 'a-propos-bstp', component: AProposBstpComponent },
  { path: 'historic', component: HistoriqueComponent },
  { path: 'ancien-directeur', component: AncienDirecteurComponent },
  { path: 'mot-du-directeur', component: MotDuDirecteurComponent },
  { path: 'mot-du-president', component: MotDuPresidentComponent },
  { path: 'etude-2009', component: Etude2009Component },

  // SubMenu: Outils
  { path: 'apps-mobile', component: ApplicationMobileComponent },
  { path: 'bd', component: BaseDeDonneeComponent },
  { path: 'cartographie-pme-pmi', component: CartographiePmePmiComponent },
  { path: 'offer', component: DocumentationTechniqueComponent },
  { path: 'offer', component: OutilsDeveloppementIndustrielComponent },

  // SubMenu: Documentation
  { path: 'code', component: CodesComponent },
  { path: 'decisions', component: DecisionsComponent },
  { path: 'lois-ordonances-decret', component: LoisOrdonancesDecretComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'rapports', component: RapportsComponent },

  //La TEAM BSTP
  { path: 'la-team-bstp', component: LaTeamBstpComponent },
  { path: 'la-team-bstp/team-detail', component: TeamDetailComponent },

  //FAQs
  { path: 'faqs', component: FaqsComponent },

  // =======================================================Fin Menu Qui Sommes Nous===============================================================================================================

  //  =======================================================Menu: Programmes=================================================================================================================================
  {
    path: 'programme-amelioration-continu',
    component: ProgrammeAmeliorationContinuComponent,
  },
  {
    path: 'programmme-labelisation',
    component: ProgrammeLabelisationComponent,
  },
  { path: 'recensement-diagnostic', component: RecensementDiagnosticComponent },

  // ==========================================================Fin Menu: Programmes==========================================================================================================================

  // ==========================================================Menus Demandes & Adhesion ==================================================================
  // SubMenu Demandes
  { path: 'partenariat', component: PartenariatComponent },
  { path: 'co-traitance', component: CoTraitanceComponent },
  { path: 'sous-traitance', component: SousTraitanceComponent },

  //SubMenu Adhesion
  { path: 'deposer-vos-cv', component: DeposerVosCvComponent },
  { path: 'devenez-membre', component: DevenezMembreComponent },
  { path: 'formulaire-adhesion', component: FormulaireAdhesionComponent },
  { path: 'poster-une-offre-emploi', component: PosterUneOffreEmploiComponent },
  { path: 'pourquoi-adherer', component: PourquoiAdhererComponent },

  //Menu Guide utilisateur
  { path: 'guide-utilisateur', component: GuideUtilisateurComponent },
  // ============================================================Fin Menus Demandes & adhesion===================================================================================================================

  // ============================================================Menus Presse et Media ========================================================================================================================
  // Submenu Actualités
  { path: 'a-la-une', component: ALaUneComponent },
  { path: 'activites-en-cours', component: ActivitesEnCoursComponent },
  { path: 'activites-realises', component: ActivitesRealisesComponent },
  {
    path: 'environnement-economique',
    component: EnvironnementEconomiqueComponent,
  },
  { path: 'galerie', component: GalerieComponent },
  { path: 'secteur-prive', component: SecteurPriveComponent },

  //==================================================================Actualites details==============================================================
  { path: 'actualite-details', component: ActualiteDetailsComponent },

  // SubMenu Evenements
  {
    path: 'ceremonie-de-recompense',
    component: CeremonieDeRecompenseComponent,
  },
  { path: 'conferences', component: ConferencesComponent },
  {
    path: 'evenement-de-nos-partenaires',
    component: EvenementDeNosPartenairesComponent,
  },
  { path: 'salons-specialises', component: SalonsSpecialisesComponent },
  { path: 'seminaire-national', component: SeminaireNationalComponent },
  { path: 'webinaires', component: WebinairesComponent },
  // =============================================================Fin Menu Presse et Media===========================================================================================================

  { path: 'contact-us', component: ContactUsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'test', component: TestComponent },


  // ================================================================ Partners dashboard =====
  

  {
    path: 'admin',
    loadChildren: () =>
      import('../app/views/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },

    {
    path: 'bstp-admin',
    loadChildren: () =>
      import('../app/views/bstp-admin/bstp-admin.module').then(
        (m) => m.BstpAdminModule
      ),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [NgSelectModule, RouterModule],
})
export class AppRoutingModule {}
