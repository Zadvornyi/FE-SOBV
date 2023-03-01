import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobvTextBoxComponent } from './components/sobv-text-box/sobv-text-box.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SobvCreatePlatoonComponent
} from "../profile-serviceman/components/sobv-create-platoon/sobv-create-platoon.component";


@NgModule({
  declarations: [
    SobvTextBoxComponent,
    SobvCreatePlatoonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    SobvTextBoxComponent,
    SobvCreatePlatoonComponent
  ],
})
export class AuthModule { }
