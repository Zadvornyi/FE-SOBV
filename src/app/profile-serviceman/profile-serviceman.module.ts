import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SobvProfileServicemanRoutingModule} from "./profile-serviceman-routing.module";
import {SobvProfileServicemanComponent} from "./components/sobv-profile-serviceman/sobv-profile-serviceman.component";
import {CoreModule} from "../core/core.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    SobvProfileServicemanComponent
  ],
  imports: [
    CommonModule,
    SobvProfileServicemanRoutingModule,
    CoreModule,
    NgbDropdownModule
  ],
  exports: [
    SobvProfileServicemanComponent
  ],
})
export class ProfileServicemanModule { }
