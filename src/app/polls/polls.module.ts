import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SobvPollModalComponent} from './components/sobv-poll-modal/sobv-poll-modal.component';
import {SobvPollsRoutingModule} from "./polls-routing.module";


@NgModule({
  declarations: [
    SobvPollModalComponent
  ],
  imports: [
    CommonModule,
    SobvPollsRoutingModule
  ]
})
export class PollsModule {
}
