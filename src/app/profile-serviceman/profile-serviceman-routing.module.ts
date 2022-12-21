import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SobvProfileServicemanComponent} from "./components/sobv-profile-serviceman/sobv-profile-serviceman.component";

const routes: Routes = [
  {path: 'profile/serviceman', component: SobvProfileServicemanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SobvProfileServicemanRoutingModule {
}
