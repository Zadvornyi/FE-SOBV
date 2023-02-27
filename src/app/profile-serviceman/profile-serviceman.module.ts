import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SobvProfileServicemanComponent} from "./components/sobv-profile-serviceman/sobv-profile-serviceman.component";
import {CoreModule} from "../core/core.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    SobvProfileServicemanComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgbDropdownModule
  ],
  exports: [
    SobvProfileServicemanComponent
  ],
})
export class ProfileServicemanModule { }
