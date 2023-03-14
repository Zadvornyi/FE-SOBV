import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {SobvDashboardComponent} from "./core/components/sobv-dashboard/sobv-dashboard.component";
import {SobvPageNotFoundComponent} from "./core/components/sobv-page-not-found/sobv-page-not-found.component";
import { SobvPollModalPopupComponent } from './polls/components/sobv-poll-modal-popup/sobv-poll-modal-popup.component';
import {SobvProfileServicemanComponent} from "./profile-serviceman/components/sobv-profile-serviceman/sobv-profile-serviceman.component";
import {SobvPollQuestionsComponent} from "./polls/components/sobv-poll-questions/sobv-poll-questions.component";
import {SobvLoginComponent} from "./core/components/sobv-login/sobv-login.component";
import {SobvRegisterComponent} from "./core/components/sobv-register/sobv-register.component";


export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

//TODO: create Lazy-loading modules
const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: SobvDashboardComponent},
  {path: 'auth/login', component: SobvLoginComponent, pathMatch: 'full'},
  {path: 'auth/register', component: SobvRegisterComponent, pathMatch: 'full'},
  {path: 'profile/serviceman/:servicemanId', component: SobvProfileServicemanComponent},
  {path: 'profile/serviceman/:servicemanId/category/:categoryId',
    component: SobvPollModalPopupComponent,
    children: [
      {
        path: 'poll/:pollId',
        component: SobvPollQuestionsComponent,
      }]
  },
  {path: 'error/:code', component: SobvPageNotFoundComponent},
  {path: '**', component: SobvPageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class SobvRoutingModule {
}
