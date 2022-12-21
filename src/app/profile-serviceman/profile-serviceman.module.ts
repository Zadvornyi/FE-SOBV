import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SobvProfileServicemanRoutingModule} from "./profile-serviceman-routing.module";
import {SobvProfileServicemanComponent} from "./components/sobv-profile-serviceman/sobv-profile-serviceman.component";

@NgModule({
  declarations: [
    SobvProfileServicemanComponent
  ],
  imports: [
    CommonModule,
    SobvProfileServicemanRoutingModule
  ],
  exports: [
    SobvProfileServicemanComponent
  ],
})
export class ProfileServicemanModule { }
