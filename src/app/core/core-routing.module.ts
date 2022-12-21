import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SobvDashboardComponent} from "./components/sobv-dashboard/sobv-dashboard.component";
import {SobvPageNotFoundComponent} from "./components/sobv-page-not-found/sobv-page-not-found.component";

const routes: Routes = [
  {path: 'dashboard', component: SobvDashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: SobvPageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobvCoreRoutingModule {
}
