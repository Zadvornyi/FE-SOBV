import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SobvHeaderComponent} from "./components/sobv-header/sobv-header.component";
import {SobvPageNotFoundComponent} from "./components/sobv-page-not-found/sobv-page-not-found.component";
import {SobvDashboardComponent} from "./components/sobv-dashboard/sobv-dashboard.component";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {SobvSubHeaderComponent} from './components/sobv-sub-header/sobv-sub-header.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    SobvHeaderComponent,
    SobvPageNotFoundComponent,
    SobvDashboardComponent,
    SobvSubHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbTooltipModule
  ],
  exports: [
    SobvHeaderComponent,
    SobvPageNotFoundComponent,
    SobvDashboardComponent,
    SobvSubHeaderComponent
  ],
  providers: [],
})
export class CoreModule {
}
