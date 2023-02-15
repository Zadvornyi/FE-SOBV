import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SobvPollQuestionsComponent } from './components/sobv-poll-questions/sobv-poll-questions.component';
import { SobvPollChoicesComponent } from './components/sobv-poll-choices/sobv-poll-choices.component';
import { CoreModule } from '../core/core.module';
import { SobvPollModalPopupComponent } from './components/sobv-poll-modal-popup/sobv-poll-modal-popup.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SobvPollQuestionsComponent,
    SobvPollChoicesComponent,
    SobvPollModalPopupComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
  ],
  exports: [
  ]
})
export class PollsModule {
}
