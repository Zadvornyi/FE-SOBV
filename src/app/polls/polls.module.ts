import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SobvPollQuestionsComponent } from './components/sobv-poll-questions/sobv-poll-questions.component';
import { SobvPollChoicesComponent } from './components/sobv-poll-choices/sobv-poll-choices.component';
import { CoreModule } from '../core/core.module';
import { SobvPollModalPopupComponent } from './components/sobv-poll-modal-popup/sobv-poll-modal-popup.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {SobvPollQuestionsFormService} from "./services/sobv-poll-questions-form.service";
import {ProfileServicemanModule} from "../profile-serviceman/profile-serviceman.module";


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
    ProfileServicemanModule,
    ReactiveFormsModule
  ],
  providers: [SobvPollQuestionsFormService],
  exports: [
  ]
})
export class PollsModule {
}
