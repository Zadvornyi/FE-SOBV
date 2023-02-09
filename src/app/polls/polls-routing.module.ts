import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SobvPollAssessmentComponent } from './components/sobv-poll-assessment/sobv-poll-assessment.component';
import {SobvPollModalComponent} from "./components/sobv-poll-modal/sobv-poll-modal.component";

const routes: Routes = [
  {path: 'polls/category/:categoryId/poll/:pollId', component: SobvPollModalComponent},
  {path: 'profile/serviceman/:servicemanId/poll/category/:categoryId/:pollId', component: SobvPollAssessmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobvPollsRoutingModule {
}
