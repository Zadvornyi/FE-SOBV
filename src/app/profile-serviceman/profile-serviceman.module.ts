import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SobvProfileServicemanComponent} from "./components/sobv-profile-serviceman/sobv-profile-serviceman.component";
import {CoreModule} from "../core/core.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {
  SobvCreateServicemanComponent
} from "../core/components/sobv-create-serviceman/sobv-create-serviceman.component";

@NgModule({
  declarations: [
    SobvProfileServicemanComponent,
    SobvCreateServicemanComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    CoreModule
  ],
  exports: [
    SobvProfileServicemanComponent,
  ],
})
export class ProfileServicemanModule { }
