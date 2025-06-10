import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppMainSectionComponent} from "./components/app-mid-components/app-main-section/app-main-section.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: AppMainSectionComponent}
  // {path: 'news', pathMatch: 'full', component: NewsPageSectionComponent},
  // {path: 'news/:id', component: NewsDetailComponent, canActivate: [NewsExistsGuard]},
  // {path: 'prices', pathMatch: 'full', component: PricesPageSectionComponent},
  // {path: 'reservations', pathMatch: 'full', component: ReservationsPageSectionComponent},
  // {path: 'gallery', pathMatch: 'full', component: GalleryPageSectionComponent},
  // {path: 'about-us', pathMatch: 'full', component: AboutUsPageSectionComponent},
  // {path: 'contacts', pathMatch: 'full', component: ContactsPageSectionComponent},
  // {path: 'terms', pathMatch: 'full', component: TermsOfUseComponent},
  // {path: 'gdpr', pathMatch: 'full', component: GdprComponent},
  // {path: '**', component: NotFoundComponent}
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100]
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
