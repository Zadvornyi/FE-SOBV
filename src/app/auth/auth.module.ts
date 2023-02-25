import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobvLoginComponent } from './components/sobv-login/sobv-login.component';
import { SobvTextBoxComponent } from './components/sobv-text-box/sobv-text-box.component';
import { SobvPasswordBoxComponent } from './components/sobv-password-box/sobv-password-box.component';
import { SobvRegisterComponent } from './components/sobv-register/sobv-register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SobvLoginComponent,
    SobvTextBoxComponent,
    SobvPasswordBoxComponent,
    SobvRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SobvLoginComponent,
  ],
})
export class AuthModule { }
