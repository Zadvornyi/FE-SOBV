import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {SobvRoutingModule} from './sobv-routing.module';
import {SobvComponent} from './sobv.component';
import {CoreModule} from "./core/core.module";
import {ProfileServicemanModule} from "./profile-serviceman/profile-serviceman.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PollsModule} from "./polls/polls.module";
import {NgxPopperModule} from "ngx-popper";
import { AuthModule } from './auth/auth.module';
import {ModalWindowsModule} from "./modal-windows/modal-windows.module";


@NgModule({
  declarations: [
    SobvComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SobvRoutingModule,
    ProfileServicemanModule,
    AuthModule,
    PollsModule,
    CoreModule,
    NgbModule,
    ModalWindowsModule,
    NgxPopperModule.forRoot({})
  ],
  providers: [],
  bootstrap: [SobvComponent]
})
export class SobvModule {
}
