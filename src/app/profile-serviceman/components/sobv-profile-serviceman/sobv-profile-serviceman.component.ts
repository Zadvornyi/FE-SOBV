import {Component, OnInit} from '@angular/core';
import {SobvProfileServicemanService} from "../../services/sobv-profile-serviceman.service";
import {Category, Report} from "../../../polls/interfaces";
import {SobvPollsService} from "../../../polls/services/sobv-polls.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, take} from "rxjs";
import {SobvRateScrollService} from "../../../core/services/sobv-rate-scroll.service";

import * as moment from 'moment'
import {Serviceman} from "../../../core/interfaces";

@Component({
  selector: 'sobv-profile-serviceman',
  templateUrl: './sobv-profile-serviceman.component.html',
  styleUrls: ['./sobv-profile-serviceman.component.scss']
})
export class SobvProfileServicemanComponent implements OnInit {
  public categories?: Category[];
  public servicemanId?: string;
  public reportsData?: Report[]
  public startTime?: number
  public endTime?: number
  public timeLine?: moment.Moment[]
  public userData?: Serviceman

  constructor(
    private sobvProfileServicemanService: SobvProfileServicemanService,
    private sobvRateScroll: SobvRateScrollService,
    private sobvPollsService: SobvPollsService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    //init timeline
    this.startTime = moment().subtract(6, 'month').unix();
    this.endTime = moment().add(3, 'month').unix();
    this.timeLine = this.sobvRateScroll.initTimeLineRate(this.startTime, this.endTime);

    this.servicemanId = this.route.snapshot.paramMap.get('servicemanId') as string;
    this.getServiceman(this.servicemanId).pipe(take(1)).subscribe((resp) => {
      this.userData = resp;
    })
    this.getPollsCategories().pipe(take(1)).subscribe((resp) => {
      this.categories = resp
    });
    this.getServicemanReports(this.servicemanId).pipe(take(1)).subscribe((resp) => {
      this.reportsData = resp
    });
  }
  private getPollsCategories(): Observable<Category[]> {
    return this.sobvPollsService.getPollsCategories();
  }

  private getServicemanReports(servicemanId: string): Observable<Report[]> {
    return this.sobvPollsService.getServicemanReports(servicemanId);
  }

  private getServiceman (servicemanId: string) {
    return this.sobvPollsService.getServiceman(servicemanId);
  }

  getAliases():string {
    return `Позивний: ${this.userData?.aliases}`
  }

  getName():string {
    return `${this.userData?.first_name} ${this.userData?.surname_name} ${this.userData?.last_name} `;
  }

  getPlatoon():string {
    return `${this.userData?.platoon}`;
  }

  getCompany():string {
    return ` ${this.userData?.company}`
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
