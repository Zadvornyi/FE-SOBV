import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SobvPollsRoutingModule} from "./polls-routing.module";
import {SobvPollModalComponent} from './components/sobv-poll-modal/sobv-poll-modal.component';
import { SobvPollQuestionsComponent } from './components/sobv-poll-questions/sobv-poll-questions.component';
import { SobvPollChoicesComponent } from './components/sobv-poll-choices/sobv-poll-choices.component';
import { SobvPollAssessmentComponent } from './components/sobv-poll-assessment/sobv-poll-assessment.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    SobvPollModalComponent,
    SobvPollQuestionsComponent,
    SobvPollChoicesComponent,
    SobvPollAssessmentComponent,
  ],
  imports: [
    CommonModule,
    SobvPollsRoutingModule,
    CoreModule,
  ]
})
export class PollsModule {
}
