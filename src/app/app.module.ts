import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppMainSectionComponent} from "./components/app-mid-components/app-main-section/app-main-section.component";
import {AppHeaderComponent} from "./components/app-header/app-header.component";
import {AppFooterComponent} from "./components/app-footer/app-footer.component";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    AppComponent,
    AppMainSectionComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  providers: [],
  exports: [],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
