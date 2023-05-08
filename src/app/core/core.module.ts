import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SobvHeaderComponent} from "./components/sobv-header/sobv-header.component";
import {SobvPageNotFoundComponent} from "./components/sobv-page-not-found/sobv-page-not-found.component";
import {SobvDashboardComponent} from "./components/sobv-dashboard/sobv-dashboard.component";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {SobvSubHeaderComponent} from './components/sobv-sub-header/sobv-sub-header.component';
import {RouterModule} from "@angular/router";
import {SobvHeaderBaseComponent} from './components/sobv-header-base/sobv-header-base.component';
import {SobvTimeLineComponent} from './components/sobv-time-line/sobv-time-line.component';
import {SobvRateBarComponent} from "./components/sobv-rate-bar/sobv-rate-bar.component";
import {NgxPopperModule} from "ngx-popper";
import { SobvLimitStringPipe } from './pipes/sobv-limit-string.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import {SobvRegisterComponent} from "./components/sobv-register/sobv-register.component";
import {SobvPasswordBoxComponent} from "./components/sobv-password-box/sobv-password-box.component";
import {SobvTextBoxComponent} from "./components/sobv-text-box/sobv-text-box.component";
import {SobvLoginComponent} from "./components/sobv-login/sobv-login.component";
import { AuthorizedUserDirective } from './directives/authorized-user.directive';
import { UserRoleDirective } from './directives/user-role.directive';
import {SobvCreateCompanyComponent} from "./components/sobv-create-company/sobv-create-company.component";
import {SobvCreatePlatoonComponent} from "./components/sobv-create-platoon/sobv-create-platoon.component";
import { SobvCreateServicemanComponent } from './components/sobv-create-serviceman/sobv-create-serviceman.component';

@NgModule({
  declarations: [
    SobvHeaderComponent,
    SobvPageNotFoundComponent,
    SobvDashboardComponent,
    SobvSubHeaderComponent,
    SobvHeaderBaseComponent,
    SobvTimeLineComponent,
    SobvRateBarComponent,
    SobvLimitStringPipe,
    SobvLoginComponent,
    SobvTextBoxComponent,
    SobvPasswordBoxComponent,
    SobvRegisterComponent,
    AuthorizedUserDirective,
    UserRoleDirective,
    SobvCreateCompanyComponent,
    SobvCreatePlatoonComponent,
    SobvCreateServicemanComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgxPopperModule,
  ],
  exports: [
    SobvHeaderComponent,
    SobvPageNotFoundComponent,
    SobvDashboardComponent,
    SobvSubHeaderComponent,
    SobvHeaderBaseComponent,
    SobvTimeLineComponent,
    SobvRateBarComponent,
    SobvLoginComponent,
    AuthorizedUserDirective,
    UserRoleDirective
  ],
  providers: [],
})
export class CoreModule {
}
