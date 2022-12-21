import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SobvRoutingModule } from './sobv-routing.module';
import { SobvComponent } from './sobv.component';

@NgModule({
  declarations: [
    SobvComponent
  ],
  imports: [
    BrowserModule,
    SobvRoutingModule
  ],
  providers: [],
  bootstrap: [SobvComponent]
})
export class SobvModule { }
