import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobvCreateServicemanComponent } from './components/sobv-create-serviceman/sobv-create-serviceman.component';
import {SobvCreatePlatoonComponent} from "./components/sobv-create-platoon/sobv-create-platoon.component";
import {SobvCreateCompanyComponent} from "./components/sobv-create-company/sobv-create-company.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthModule} from "../auth/auth.module";


@NgModule({
  declarations: [
    SobvCreateServicemanComponent,
    SobvCreatePlatoonComponent,
    SobvCreateCompanyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthModule
  ],
  exports: [
    SobvCreateServicemanComponent,
    SobvCreatePlatoonComponent,
    SobvCreateCompanyComponent
  ]
})
export class ModalWindowsModule {
}
