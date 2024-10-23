import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule } from 'primeng/carousel';
import { NgChartsModule } from 'ng2-charts';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { SwiperModule } from 'swiper/angular';


// import { AccordionModule } from 'primeng/accordion';
// import { AutoCompleteModule } from 'primeng/autocomplete';
// import { AvatarModule } from 'primeng/avatar';
// import { AvatarGroupModule } from 'primeng/avatargroup';
// import { BadgeModule } from 'primeng/badge';
// import { BreadcrumbModule } from 'primeng/breadcrumb';
// import { ButtonModule } from 'primeng/button';
// import { CalendarModule } from 'primeng/calendar';
// import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { OffresComponent } from './views/offres/offres.component';
import { HeaderComponent } from './views/menus/header/header.component';
import { NavComponent } from './views/menus/nav/nav.component';
import { AProposBstpComponent } from './views/qui-sommes-nous/a-propos/a-propos-bstp/a-propos-bstp.component';
import { HistoriqueComponent } from './views/qui-sommes-nous/a-propos/historique/historique.component';
import { AncienDirecteurComponent } from './views/qui-sommes-nous/a-propos/ancien-directeur/ancien-directeur.component';
import { MotDuPresidentComponent } from './views/qui-sommes-nous/a-propos/mot-du-president/mot-du-president.component';
import { MotDuDirecteurComponent } from './views/qui-sommes-nous/a-propos/mot-du-directeur/mot-du-directeur.component';
import { BaseDeDonneeComponent } from './views/qui-sommes-nous/outils/base-de-donnee/base-de-donnee.component';
import { DocumentationTechniqueComponent } from './views/qui-sommes-nous/outils/documentation-technique/documentation-technique.component';
import { CartographiePmePmiComponent } from './views/qui-sommes-nous/outils/cartographie-pme-pmi/cartographie-pme-pmi.component';
import { OutilsDeveloppementIndustrielComponent } from './views/qui-sommes-nous/outils/outils-developpement-industriel/outils-developpement-industriel.component';
import { ApplicationMobileComponent } from './views/qui-sommes-nous/outils/application-mobile/application-mobile.component';
import { LoisOrdonancesDecretComponent } from './views/qui-sommes-nous/documentation/lois-ordonances-decret/lois-ordonances-decret.component';
import { CodesComponent } from './views/qui-sommes-nous/documentation/codes/codes.component';
import { DecisionsComponent } from './views/qui-sommes-nous/documentation/decisions/decisions.component';
import { RapportsComponent } from './views/qui-sommes-nous/documentation/rapports/rapports.component';
import { PolitiquesSectoriellesComponent } from './views/qui-sommes-nous/documentation/politiques-sectorielles/politiques-sectorielles.component';
import { PublicationsComponent } from './views/qui-sommes-nous/documentation/publications/publications.component';
import { ProgrammeAmeliorationContinuComponent } from './views/programmmes/programme-amelioration-continu/programme-amelioration-continu.component';
import { ProgrammeLabelisationComponent } from './views/programmmes/programme-labelisation/programme-labelisation.component';
import { RecensementDiagnosticComponent } from './views/programmmes/recensement-diagnostic/recensement-diagnostic.component';
import { Etude2009Component } from './views/qui-sommes-nous/a-propos/etude-2009/etude-2009.component';
import { LaTeamBstpComponent } from './views/qui-sommes-nous/la-team-bstp/la-team-bstp.component';
import { FaqsComponent } from './views/qui-sommes-nous/faqs/faqs.component';
import { TeamDetailComponent } from './views/qui-sommes-nous/la-team-bstp/team-detail/team-detail.component';
import { ALaUneComponent } from './views/presse-et-media/actualites/a-la-une/a-la-une.component';
import { ActivitesRealisesComponent } from './views/presse-et-media/actualites/activites-realises/activites-realises.component';
import { ActivitesEnCoursComponent } from './views/presse-et-media/actualites/activites-en-cours/activites-en-cours.component';
import { EnvironnementEconomiqueComponent } from './views/presse-et-media/actualites/environnement-economique/environnement-economique.component';
import { SecteurPriveComponent } from './views/presse-et-media/actualites/secteur-prive/secteur-prive.component';
import { GalerieComponent } from './views/presse-et-media/actualites/galerie/galerie.component';
import { SeminaireNationalComponent } from './views/presse-et-media/evenement/seminaire-national/seminaire-national.component';
import { SalonsSpecialisesComponent } from './views/presse-et-media/evenement/salons-specialises/salons-specialises.component';
import { CeremonieDeRecompenseComponent } from './views/presse-et-media/evenement/ceremonie-de-recompense/ceremonie-de-recompense.component';
import { ConferencesComponent } from './views/presse-et-media/evenement/conferences/conferences.component';
import { WebinairesComponent } from './views/presse-et-media/evenement/webinaires/webinaires.component';
import { EvenementDeNosPartenairesComponent } from './views/presse-et-media/evenement/evenement-de-nos-partenaires/evenement-de-nos-partenaires.component';
import { PartenariatComponent } from './views/demande-et-adhesion/demandes/partenariat/partenariat.component';
import { SousTraitanceComponent } from './views/demande-et-adhesion/demandes/sous-traitance/sous-traitance.component';
import { CoTraitanceComponent } from './views/demande-et-adhesion/demandes/co-traitance/co-traitance.component';
import { PourquoiAdhererComponent } from './views/demande-et-adhesion/adhesion/pourquoi-adherer/pourquoi-adherer.component';
import { DevenezMembreComponent } from './views/demande-et-adhesion/adhesion/devenez-membre/devenez-membre.component';
import { FormulaireAdhesionComponent } from './views/demande-et-adhesion/adhesion/formulaire-adhesion/formulaire-adhesion.component';
import { DeposerVosCvComponent } from './views/demande-et-adhesion/adhesion/deposer-vos-cv/deposer-vos-cv.component';
import { PosterUneOffreEmploiComponent } from './views/demande-et-adhesion/adhesion/poster-une-offre-emploi/poster-une-offre-emploi.component';
import { GuideUtilisateurComponent } from './views/demande-et-adhesion/guide-utilisateur/guide-utilisateur.component';
// import { CheckboxModule } from 'primeng/checkbox';
// import { ChipModule } from 'primeng/chip';
// import { ChipsModule } from 'primeng/chips';
// import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { ConfirmPopupModule } from 'primeng/confirmpopup';
// import { ColorPickerModule } from 'primeng/colorpicker';
// import { ContextMenuModule } from 'primeng/contextmenu';
// import { DataViewModule } from 'primeng/dataview';
// import { VirtualScrollerModule } from 'primeng/virtualscroller';
// import { DialogModule } from 'primeng/dialog';
// import { DividerModule } from 'primeng/divider';
// import { DockModule } from 'primeng/dock';
// import { DragDropModule } from 'primeng/dragdrop';
// import { DropdownModule } from 'primeng/dropdown';
// import { DynamicDialogModule } from 'primeng/dynamicdialog';
// import { EditorModule } from 'primeng/editor';
// import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { ActualiteDetailsComponent } from './views/presse-et-media/actualites/actualite-details/actualite-details.component';
import { FooterComponent } from './views/menus/footer/footer.component';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { GalleriaModule } from 'primeng/galleria';
// import { InplaceModule } from 'primeng/inplace';
// import { InputMaskModule } from 'primeng/inputmask';
// import { InputSwitchModule } from 'primeng/inputswitch';
// import { InputTextModule } from 'primeng/inputtext';
// import { InputNumberModule } from 'primeng/inputnumber';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { ImageModule } from 'primeng/image';
// import { KnobModule } from 'primeng/knob';
// import { ListboxModule } from 'primeng/listbox';
// import { MegaMenuModule } from 'primeng/megamenu';
// import { MenuModule } from 'primeng/menu';
// import { MenubarModule } from 'primeng/menubar';
// import { MessageModule } from 'primeng/message';
// import { MessagesModule } from 'primeng/messages';
// import { MultiSelectModule } from 'primeng/multiselect';
// import { OrderListModule } from 'primeng/orderlist';
// import { OrganizationChartModule } from 'primeng/organizationchart';
// import { OverlayPanelModule } from 'primeng/overlaypanel';
// import { PaginatorModule } from 'primeng/paginator';
// import { PanelModule } from 'primeng/panel';
// import { PanelMenuModule } from 'primeng/panelmenu';
// import { PasswordModule } from 'primeng/password';
// import { PickListModule } from 'primeng/picklist';
// import { ProgressBarModule } from 'primeng/progressbar';
// import { RadioButtonModule } from 'primeng/radiobutton';
// import { RatingModule } from 'primeng/rating';
// import { ScrollerModule } from 'primeng/scroller';
// import { ScrollPanelModule } from 'primeng/scrollpanel';
// import { ScrollTopModule } from 'primeng/scrolltop';
// import { SelectButtonModule } from 'primeng/selectbutton';
// import { SidebarModule } from 'primeng/sidebar';
// import { SkeletonModule } from 'primeng/skeleton';
// import { SlideMenuModule } from 'primeng/slidemenu';
// import { SliderModule } from 'primeng/slider';
// import { SpeedDialModule } from 'primeng/speeddial';
// import { SpinnerModule } from 'primeng/spinner';
// import { SplitButtonModule } from 'primeng/splitbutton';
// import { SplitterModule } from 'primeng/splitter';
// import { StepsModule } from 'primeng/steps';
// import { TabMenuModule } from 'primeng/tabmenu';
// import { TableModule } from 'primeng/table';
// import { TabViewModule } from 'primeng/tabview';
// import { TagModule } from 'primeng/tag';
// import { TerminalModule } from 'primeng/terminal';
// import { TieredMenuModule } from 'primeng/tieredmenu';
// import { TimelineModule } from 'primeng/timeline';
// import { ToastModule } from 'primeng/toast';
// import { ToggleButtonModule } from 'primeng/togglebutton';
// import { ToolbarModule } from 'primeng/toolbar';
// import { TooltipModule } from 'primeng/tooltip';
// import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
// import { TreeModule } from 'primeng/tree';
// import { TreeSelectModule } from 'primeng/treeselect';
// import { TreeTableModule } from 'primeng/treetable';
// import { AnimateModule } from 'primeng/animate';
// import { CardModule } from 'primeng/card';
// import { BlockUIModule } from 'primeng/blockui';
// import { ProgressSpinnerModule } from 'primeng/progressspinner';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffresComponent,
    HeaderComponent,
    NavComponent,
    AProposBstpComponent,
    HistoriqueComponent,
    AncienDirecteurComponent,
    MotDuPresidentComponent,
    MotDuDirecteurComponent,
    BaseDeDonneeComponent,
    DocumentationTechniqueComponent,
    CartographiePmePmiComponent,
    OutilsDeveloppementIndustrielComponent,
    ApplicationMobileComponent,
    LoisOrdonancesDecretComponent,
    CodesComponent,
    DecisionsComponent,
    RapportsComponent,
    PolitiquesSectoriellesComponent,
    PublicationsComponent,
    ProgrammeAmeliorationContinuComponent,
    ProgrammeLabelisationComponent,
    RecensementDiagnosticComponent,
    Etude2009Component,
    LaTeamBstpComponent,
    FaqsComponent,
    TeamDetailComponent,
    ALaUneComponent,
    ActivitesRealisesComponent,
    ActivitesEnCoursComponent,
    EnvironnementEconomiqueComponent,
    SecteurPriveComponent,
    GalerieComponent,
    SeminaireNationalComponent,
    SalonsSpecialisesComponent,
    CeremonieDeRecompenseComponent,
    ConferencesComponent,
    WebinairesComponent,
    EvenementDeNosPartenairesComponent,
    PartenariatComponent,
    SousTraitanceComponent,
    CoTraitanceComponent,
    PourquoiAdhererComponent,
    DevenezMembreComponent,
    FormulaireAdhesionComponent,
    DeposerVosCvComponent,
    PosterUneOffreEmploiComponent,
    GuideUtilisateurComponent,
    ActualiteDetailsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule,
     CountUpModule,
     CarouselModule,
     BrowserAnimationsModule,
     NgChartsModule,
     ChartModule,
    //  AvatarModule,
    //  AvatarGroupModule,
    //  BrowserModule,
    //  FormsModule,
    //  HttpClientModule,
    //  ReactiveFormsModule,
    //  AccordionModule,
    //  AutoCompleteModule,
    //  BadgeModule,
    //  BreadcrumbModule,
    //  BlockUIModule,
    //  ButtonModule,
    //  CalendarModule,
    //  CascadeSelectModule,
    //  CheckboxModule,
    //  ChipsModule,
    //  ChipModule,
    //  ColorPickerModule,
    //  ConfirmDialogModule,
    //  ConfirmPopupModule,
    //  ContextMenuModule,
    //  VirtualScrollerModule,
    //  DataViewModule,
    //  DialogModule,
    //  DividerModule,
    //  DockModule,
    //  DragDropModule,
    //  DropdownModule,
    //  DynamicDialogModule,
    //  EditorModule,
    //  FieldsetModule,
     FileUploadModule,
    //  GalleriaModule,
    //  InplaceModule,
    //  InputMaskModule,
    //  InputSwitchModule,
    //  InputTextModule,
    //  InputTextareaModule,
    //  InputNumberModule,
    //  ImageModule,
    //  KnobModule,
    //  ListboxModule,
    //  MegaMenuModule,
    //  MenuModule,
    //  MenubarModule,
    //  MessageModule,
    //  MessagesModule,
    //  MultiSelectModule,
    //  OrganizationChartModule,
    //  OrderListModule,
    //  OverlayPanelModule,
    //  PaginatorModule,
    //  PanelModule,
    //  PanelMenuModule,
    //  PasswordModule,
    //  PickListModule,
    //  ProgressSpinnerModule,
    //  ProgressBarModule,
    //  RadioButtonModule,
    //  RatingModule,
    //  SelectButtonModule,
    //  SidebarModule,
    //  ScrollerModule,
    //  ScrollPanelModule,
    //  ScrollTopModule,
    //  SkeletonModule,
    //  SlideMenuModule,
    //  SliderModule,
    //  SpeedDialModule,
    //  SpinnerModule,
    //  SplitterModule,
    //  SplitButtonModule,
    //  StepsModule,
    //  TableModule,
    //  TabMenuModule,
    //  TabViewModule,
    //  TagModule,
    //  TerminalModule,
    //  TieredMenuModule,
    //  TimelineModule,
    //  ToastModule,
    //  ToggleButtonModule,
    //  ToolbarModule,
    //  TooltipModule,
    //  TriStateCheckboxModule,
    //  TreeModule,
    //  TreeSelectModule,
    //  TreeTableModule,
    //  AnimateModule,
    //  CardModule,

    
  ],
  providers: [], //gestion de la redirection
  bootstrap: [AppComponent]
})
export class AppModule { }
