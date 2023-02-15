import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SobvDashboardComponent} from "./core/components/sobv-dashboard/sobv-dashboard.component";
import {SobvPageNotFoundComponent} from "./core/components/sobv-page-not-found/sobv-page-not-found.component";
import { SobvPollModalPopupComponent } from './polls/components/sobv-poll-modal-popup/sobv-poll-modal-popup.component';
import {SobvProfileServicemanComponent} from "./profile-serviceman/components/sobv-profile-serviceman/sobv-profile-serviceman.component";
import {SobvPollQuestionsComponent} from "./polls/components/sobv-poll-questions/sobv-poll-questions.component";
//TODO: create Lazy-loading modules
const routes: Routes = [
  {path: 'dashboard', component: SobvDashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SobvRoutingModule {
}
