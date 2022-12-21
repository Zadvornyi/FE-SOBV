import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SobvCoreRoutingModule} from "./core-routing.module";
import {SobvHeaderComponent} from "./components/sobv-header/sobv-header.component";
import {SobvPageNotFoundComponent} from "./components/sobv-page-not-found/sobv-page-not-found.component";
import {SobvDashboardComponent} from "./components/sobv-dashboard/sobv-dashboard.component";

@NgModule({
  declarations: [
    SobvHeaderComponent,
    SobvPageNotFoundComponent,
    SobvDashboardComponent
  ],
  imports: [
    CommonModule,
    SobvCoreRoutingModule
  ],
  exports: [
    SobvHeaderComponent,
    SobvPageNotFoundComponent,
    SobvDashboardComponent
  ],
  providers: [],
})
export class CoreModule {
}
