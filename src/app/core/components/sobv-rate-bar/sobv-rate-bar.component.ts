import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {SobvRateScrollService} from "../../services/sobv-rate-scroll.service";
import * as moment from 'moment'
import {Report} from "../../../polls/interfaces";

@Component({
  selector: 'sobv-rate-bar',
  templateUrl: './sobv-rate-bar.component.html',
  styleUrls: ['./sobv-rate-bar.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class SobvRateBarComponent {
  @ViewChild("rateWrap", {static: true, read: ElementRef}) rateWrap?: ElementRef;
  @Input('startTime') public startTime?: any;
  @Input('endTime') public endTime?: any;
  @Input('inputData') public inputData?: any;
  @Input('timeLine') public timeLine?: moment.Moment[];

  isDisabledToolTip!: boolean;

  widthPeriodFuture!: number;
  leftPeriodFuture!: number;
  isFutureStartTime?: boolean;

  currentItemRange?: any;
  currentUnixTime!: number;
  leftCurrentPoint?: any;
  isShowCurrentDivision?: boolean;

  barLength!: number;
  divisionLineData?: Array<any>;
  ratesData?: Array<any>;
  itemsInTimeRange?: Array<any>;

  constructor(private hostElement: ElementRef, private renderer: Renderer2, private sobvRateScroll: SobvRateScrollService) {
  }

  ngOnInit() {
    this.sobvRateScroll.storageRate = {};
  }

  onResize(event: UIEvent) {
    this.calculateBarLineLeng()
    this.calculateDivisionline()
    this.calculatePeriodExist()
    this.initDisabledToolTip()
    this.initRatesData()
    this.sobvRateScroll.storageRate = {};
  }

  ngOnChanges(changesObj: any) {
    if (changesObj.inputData.currentValue) {
      this.currentUnixTime = moment().unix();
      this.currentItemRange = this.getAllHealthIdexesByTime(this.inputData, this.currentUnixTime)[0];
      this.isFutureStartTime = this.currentUnixTime < this.endTime;

      this.calculateBarLineLeng()
      this.calculateDivisionline()
      this.calculatePeriodExist()
      // this.initDisabledToolTip()
      this.initRatesData()
    }
  }

  showDetails(event: Event, range: any) {
    let result: any[] = [];
    if (this.inputData.issues) {
      this.inputData.issues.forEach((sobvItem: any) => {
        if (sobvItem.start_time < range.start_time && sobvItem.end_time >= range.start_time) {
          result.push(sobvItem)
        } else if (sobvItem.start_time >= range.start_time && sobvItem.end_time <= range.end_time) {
          result.push(sobvItem)
        } else if (sobvItem.start_time < range.end_time && sobvItem.end_time >= range.end_time) {
          result.push(sobvItem)
        } else if (sobvItem.start_time >= range.start_time && sobvItem.end_time >= range.end_time) {
          result.push(sobvItem)
        }
      })
    }
    this.itemsInTimeRange = result;
  }

  private calculateDivisionline() {
    if (this.timeLine) {
      let i = 1, len = this.timeLine?.length - 1;

      this.divisionLineData = [];

      for (i = i; i < len; i++) {
        let time: moment.Moment = this.timeLine[i],
          px1 = this.calculatePoint(time.unix());
        this.divisionLineData.push({'left': px1});
      }
    }
  }

  private calculateBarLineLeng() {
    let scrollbarWidth = 20, // width of scroll bar
      widthParent = this.hostElement.nativeElement.parentElement.clientWidth - scrollbarWidth;

    //save prev width for alining future rate bar according to appearing scrollbar
    if (this.sobvRateScroll.storageRate.width && this.sobvRateScroll.storageRate.width) {
      widthParent = this.sobvRateScroll.storageRate.width
    } else {
      this.sobvRateScroll.storageRate.width = widthParent;
    }

    this.renderer.setStyle(this.rateWrap?.nativeElement, 'width', widthParent + 'px');
    this.barLength = widthParent;
  };

  private calculatePeriodExist() {
    if (this.currentUnixTime && this.startTime && this.endTime) {
      let curentTimePoint = this.calculatePoint(this.currentUnixTime);
      let endTimePoint: number =  (this.isFutureStartTime) ? this.calculatePoint(this.endTime): this.barLength;
      let futureStartPoint: number = (this.isFutureStartTime) ? curentTimePoint: this.calculatePoint(this.endTime);
      let futureWidthRate = endTimePoint - futureStartPoint;

      this.widthPeriodFuture = futureWidthRate;
      this.leftPeriodFuture = futureStartPoint;

      this.leftCurrentPoint = curentTimePoint;
      this.isShowCurrentDivision = this.currentUnixTime >= this.startTime && this.currentUnixTime <= this.endTime;
    }
  }

  private initRatesData() {
    //TODO: GET from server unix date_stamp
    let result: any[] = [];
    this.inputData.sort(function (a: Report, b: Report) {
      return moment(a.created_date).unix() - moment(b.created_date).unix();
    })

    this.inputData?.forEach((item: any, index: number) => {
      let score: string = (item.health_level >= 80) ? 'high' : (item.health_level >= 70 && item.health_level < 79.99) ? 'medium' : (item.health_level >= 60 && item.health_level < 69.99) ? 'low' : 'critical',
        startTime = moment(item.created_date).unix(),
        endTime = (this.inputData[index + 1]) ? moment(this.inputData[index + 1].created_date).unix() : moment().unix(),
        tmp = Object.assign({
          health: item.health_level,
          score: score,
          _create_date: item.created_date,
          start_time: startTime,
          end_time: endTime,
        }, this.calculateRate(startTime, endTime));

      item.score = score;
      result.push(tmp);
    })
    this.ratesData = result;
  }

  private calculateRate(startTime: number, endtTime: number) {
    let px1 = this.calculatePoint(startTime),
      px2 = (this.currentUnixTime && endtTime > this.currentUnixTime) ? this.calculatePoint(this.currentUnixTime) : this.calculatePoint(endtTime),
      widthRate = (px2 - px1);
    return {'width': widthRate, 'left': px1}
  };

  private initDisabledToolTip() {
    this.isDisabledToolTip = !(this.inputData.risks || this.inputData.issues);
  }

  private calculatePoint(unixTime: number) {
    let unixDelta = this.endTime - this.startTime;
    return ((unixTime - this.startTime) * this.barLength) / unixDelta;
  };

  private getAllHealthIdexesByTime(inputData: Report[], time: number) {
    let result: Report[] = [];

    if (inputData) {
      inputData.forEach((item: any) => {
        if (item.start_time <= time && item.end_time >= time) {
          result.push(item)
        }
      })
    }

    return (result.length > 0) ? result : [{score: 'high'}];
  }
}
