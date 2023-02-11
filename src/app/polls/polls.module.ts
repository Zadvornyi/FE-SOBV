import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SobvPollModalComponent} from './components/sobv-poll-modal/sobv-poll-modal.component';
import { SobvPollQuestionsComponent } from './components/sobv-poll-questions/sobv-poll-questions.component';
import { SobvPollChoicesComponent } from './components/sobv-poll-choices/sobv-poll-choices.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    SobvPollModalComponent,
    SobvPollQuestionsComponent,
    SobvPollChoicesComponent,
    ],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class PollsModule {
}
