import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SobvDashboardComponent} from "./core/components/sobv-dashboard/sobv-dashboard.component";
import {SobvPageNotFoundComponent} from "./core/components/sobv-page-not-found/sobv-page-not-found.component";
import { SobvPollModalPopupComponent } from './polls/components/sobv-poll-modal-popup/sobv-poll-modal-popup.component';
import {SobvPollModalComponent} from "./polls/components/sobv-poll-modal/sobv-poll-modal.component";
import {SobvProfileServicemanComponent} from "./profile-serviceman/components/sobv-profile-serviceman/sobv-profile-serviceman.component";

const routes: Routes = [
  {path: 'dashboard', component: SobvDashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'polls/category/:categoryId/poll/:pollId', component: SobvPollModalPopupComponent},
  {path: 'profile/serviceman/:id', component: SobvProfileServicemanComponent},
  {path: 'error/:code', component: SobvPageNotFoundComponent},
  {path: '**', component: SobvPageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SobvRoutingModule {
}
