import { Component, OnInit } from '@angular/core';
import { SobvProfileServicemanService } from "../../services/sobv-profile-serviceman.service";
import { Category, Report } from "../../../polls/interfaces";
import { SobvPollsService } from "../../../polls/services/sobv-polls.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, take } from "rxjs";
import { SobvRateScrollService } from "../../../core/services/sobv-rate-scroll.service";

import * as moment from 'moment';
import { Serviceman } from "../../interfaces";
import {map} from "rxjs/operators";

@Component({
  selector: 'sobv-profile-serviceman',
  templateUrl: './sobv-profile-serviceman.component.html',
  styleUrls: ['./sobv-profile-serviceman.component.scss']
})
export class SobvProfileServicemanComponent implements OnInit {
  public categories?: Category[];
  public servicemanId?: string;
  public reportsData?: Report[];
  public reportsBySoldier: { [id: string]: Report[] } = {};
  public startTime?: number;
  public endTime?: number;
  public timeLine?: moment.Moment[];
  userData: Serviceman | null | undefined;

  public servicemenHierarchy: {
    [companyId: string]: {
      [platoonId: string]: Serviceman[]
    }
  } = {};


  public companyState: { [key: string]: boolean } = {};
  public platoonState: { [key: string]: boolean } = {};
  public soldierState: { [key: string]: boolean } = {};

  constructor(
    private sobvProfileServicemanService: SobvProfileServicemanService,
    private sobvRateScroll: SobvRateScrollService,
    private sobvPollsService: SobvPollsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.startTime = moment().subtract(6, 'month').unix();
    this.endTime = moment().add(3, 'month').unix();
    this.timeLine = this.sobvRateScroll.initTimeLineRate(this.startTime, this.endTime);
    this.servicemanId = this.route.snapshot.paramMap.get('servicemanId') as string;

    this.getServiceman(this.servicemanId).pipe(take(1)).subscribe((resp) => {
      this.userData = resp;
    });

    this.getPollsCategories().pipe(take(1)).subscribe((resp) => {
      this.categories = resp;
    });

    this.getServicemanReports(this.servicemanId).pipe(take(1)).subscribe((resp) => {
      this.reportsData = resp;
    });

    this.getServicemen().pipe(
      take(1),
      map((servicemen) => {
        servicemen.forEach((serviceman) => {
          const platoonId = serviceman.platoon?.toString();
          const companyId = this.getCompany()

          if (platoonId && companyId) {
            if (!this.servicemenHierarchy[companyId]) {
              this.servicemenHierarchy[companyId] = {};
            }

            if (!this.servicemenHierarchy[companyId][platoonId]) {
              this.servicemenHierarchy[companyId][platoonId] = [];
            }
            if (serviceman.serviceman_type != 2)
              this.servicemenHierarchy[companyId][platoonId].push(serviceman);
          }
        });
      })
    ).subscribe();



  }
  toggleCompany(name: string): void {
    this.companyState[name] = !this.companyState[name];
  }

  togglePlatoon(name: string): void {
    this.platoonState[name] = !this.platoonState[name];
  }

  toggleSoldier(soldier: Serviceman): void {
    const soldierId = soldier.id.toString();
    this.soldierState[soldier.first_name] = !this.soldierState[soldier.first_name];

    if (this.soldierState[soldier.first_name] && !this.reportsBySoldier[soldierId]) {
      // Загружаем отчеты только если их еще нет
      this.getServicemanReports(soldierId).pipe(take(1)).subscribe((reports) => {
        this.reportsBySoldier[soldierId] = reports;
      });
    }
  }

  private getPollsCategories(): Observable<Category[]> {
    return this.sobvPollsService.getPollsCategories();
  }

  private getServicemanReports(servicemanId: string): Observable<Report[]> {
    return this.sobvPollsService.getServicemanReports(servicemanId);
  }

  private getServiceman(servicemanId: string): Observable<Serviceman> {
    return this.sobvPollsService.getServiceman(servicemanId);
  }

  private getServicemen(): Observable<Serviceman[]> {
    return this.sobvPollsService.getServicemen();
  }


  getAliases(): string {
    return `Позивний: ${this.userData?.aliases}`;
  }

  getName(): string {
    return `${this.userData?.first_name} ${this.userData?.surname_name} ${this.userData?.last_name}`;
  }

  getPlatoon(): string {
    return `${this.userData?.platoon}`;
  }

  getCompany(): string {
    return ` ${this.userData?.company}`;
  }

  getServicemanType(): string {
    return `${this.userData?.serviceman_type}`;
  }

  getServicemenByPlatoon(companyId: string, platoonId: string): Serviceman[] {
    return this.servicemenHierarchy[companyId]?.[platoonId] || [];
  }

  getPlatoonsByCompany(companyId: string): { [platoonId: string]: Serviceman[] } {
    return this.servicemenHierarchy[companyId] || {};
  }


  public startPoll(category: Category): void {
    this.sobvPollsService.getPollsCategoryById(category.id as string).pipe(take(1)).subscribe((resp) => {
      const firstPoll = (resp.polls) ? resp.polls[0] : undefined;
      if (firstPoll) {
        this.router.navigate([`profile/serviceman/${this.servicemanId}/category/${category.id}`]);
      }
    });
  }
}
