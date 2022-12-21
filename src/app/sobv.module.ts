import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SobvRoutingModule } from './sobv-routing.module';
import { SobvComponent } from './sobv.component';
import {CoreModule} from "./core/core.module";
import {ProfileServicemanModule} from "./profile-serviceman/profile-serviceman.module";

@NgModule({
  declarations: [
    SobvComponent,
  ],
  imports: [
    BrowserModule,
    SobvRoutingModule,
    CoreModule,
    ProfileServicemanModule
  ],
  providers: [],
  bootstrap: [SobvComponent]
})
export class SobvModule { }
