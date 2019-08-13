import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { ListComponent } from "./components/list/list.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppMaterialModule } from "./app-material.module";
import { FooterComponent } from "./components/footer/footer.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { LoaderService } from "./services/loader/loader.service";
import { LoaderInterceptor } from "./interceptors/loader.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListComponent,
    FooterComponent,
    LoaderComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
