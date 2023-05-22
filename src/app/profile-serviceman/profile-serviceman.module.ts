import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from "../core/core.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {SobvProfileServicemanComponent} from "./components/sobv-profile-serviceman/sobv-profile-serviceman.component";

@NgModule({
  declarations: [
    SobvProfileServicemanComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    CoreModule,
  ],
  exports: [
    SobvProfileServicemanComponent,
  ],
})
export class ProfileServicemanModule { }
