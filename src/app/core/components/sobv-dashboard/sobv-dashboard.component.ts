import { Component, OnInit } from '@angular/core';
import {Role} from "../../enums";
import {Company} from "../../interfaces";
import {Platoon} from "../../interfaces";
import {Serviceman} from "../../interfaces";
import {SobvCompanyService} from "../../services/sobv-company.service";
import {SobvPlatoonService} from "../../services/sobv-platoon.service";
import {SobvProfileServicemanService} from "../../../profile-serviceman/services/sobv-profile-serviceman.service";
import {Observable, take} from "rxjs";

@Component({
  selector: 'sobv-dashboard',
  templateUrl: './sobv-dashboard.component.html',
  styleUrls: ['./sobv-dashboard.component.scss']
})
export class SobvDashboardComponent implements OnInit {
  public roles = Role
  public companies? : Company[]
  public platoons? : Platoon[]
  public servicemen? : Serviceman[]

  constructor(
    private sobvCompanyService: SobvCompanyService,
    private sobvPlatoonService: SobvPlatoonService,
    private sobvProfileServicemanService: SobvProfileServicemanService
  ) { }

  ngOnInit(): void {
    this.getAllCompanies().pipe(take(1)).subscribe((resp) => {
      this.companies = resp
    })
    this.getAllPlatoons().pipe(take(1)).subscribe((resp) => {
      this.platoons = resp
    })
    this.getAllServicemen().pipe(take(1)).subscribe((resp) => {
      this.servicemen = resp
    })

  }

  private getAllCompanies(): Observable<Company[]> {
      return this.sobvCompanyService.getCompanies();
  }

  private getAllPlatoons(): Observable<Platoon[]> {
      return this.sobvPlatoonService.getPlatoons();
  }

  private getAllServicemen(): Observable<Serviceman[]> {
      return this.sobvProfileServicemanService.getServicemen();
  }

}
