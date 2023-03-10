import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SobvRoutingModule } from './sobv-routing.module';
import { SobvComponent } from './sobv.component';
import {CoreModule} from "./core/core.module";
import {ProfileServicemanModule} from "./profile-serviceman/profile-serviceman.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SobvComponent,
  ],
  imports: [
    BrowserModule,
    SobvRoutingModule,
    ProfileServicemanModule,
    CoreModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [SobvComponent]
})
export class SobvModule { }
