import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {SobvCoreRoutingModule} from "./core-routing.module";
import {SobvHeaderComponent} from "./components/sobv-header/sobv-header.component";
import {SobvPageNotFoundComponent} from "./components/sobv-page-not-found/sobv-page-not-found.component";
import {SobvDashboardComponent} from "./components/sobv-dashboard/sobv-dashboard.component";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import { SobvCreatePlatoonComponent } from './components/sobv-create-platoon/sobv-create-platoon.component';
import { SobvCreateCompanyComponent } from './components/sobv-create-company/sobv-create-company.component';

@NgModule({
  declarations: [
    SobvHeaderComponent,
    SobvPageNotFoundComponent,
    SobvDashboardComponent,
    SobvCreatePlatoonComponent,
    SobvCreateCompanyComponent,
  ],
  imports: [
    CommonModule,
    SobvCoreRoutingModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule
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
