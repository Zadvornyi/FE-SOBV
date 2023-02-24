import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {SobvRateScrollService} from "../../services/sobv-rate-scroll.service";
import * as moment from 'moment'

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

  widthPeriodExist!: number;
  leftPeriodExist!: number;

  widthPeriodFuture!: number;
  leftPeriodFuture!: number;
  isFutureStartTime?: boolean;
  widthExistPeriodFuture!: number
  leftExistPeriodFuture!: number;

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
    this.calculateBarLineLeng()
    this.calculatePeriodExist()
    this.calculateDivisionline()
    this.initDisabledToolTip()
    this.initRatesData()
    this.sobvRateScroll.storageRate = {};
  }

  onResize(event: UIEvent) {
    this.calculateBarLineLeng()
    this.calculatePeriodExist()
    this.calculateDivisionline()
    this.initDisabledToolTip()
    this.initRatesData()
    this.sobvRateScroll.storageRate = {};
  }

  ngOnChanges(changesObj: any) {
    if (changesObj.inputData) {
      this.currentUnixTime = moment().unix();
      this.currentItemRange = this.getAllHealthIdexesByTime(this.inputData, this.currentUnixTime)[0];
      this.isFutureStartTime = this.currentUnixTime < this.inputData.start_time;

      this.calculateBarLineLeng()
      this.calculatePeriodExist()
      this.calculateDivisionline()
      this.initDisabledToolTip()
      this.initRatesData()
    }
  }

  showDetails(event: Event, range: any) {
    let result: any[] = [];
    if (this.inputData.issues) {
      this.inputData.issues.forEach((sobvItem:any) => {
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
    if(this.timeLine ) {
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
    let tmpPx1:number = (this.inputData.start_time !== null) ? this.calculatePoint(this.inputData.start_time) : 0,
      px1:number = (tmpPx1 < 0) ? 0 : tmpPx1,
      px2:number = this.getEndTimePoint(this.inputData.end_time) as number,
      currentPoint: number = this.calculatePoint(this.currentUnixTime),
      widthRate:number = (px2 - px1);

    this.widthPeriodExist = widthRate;
    this.leftPeriodExist = px1;

    if(this.currentUnixTime && this.startTime && this.endTime) {
      let futureExistPx1:number = (this.isFutureStartTime) ? this.calculatePoint(this.inputData.start_time) : this.calculatePoint(this.currentUnixTime),
        futureExistPx2: any = (this.inputData.end_time === null || this.inputData.end_time > this.endTime) ? this.barLength : this.calculatePoint(this.inputData.end_time),
        futureExistWidthRate = (futureExistPx2 - futureExistPx1),
        futureWidthRate = (this.inputData.end_time === null || this.inputData.end_time > this.endTime) ? 0 :
          this.calculatePoint(this.endTime) - futureExistPx2;

      this.widthPeriodFuture = (futureWidthRate < 0) ? 0 : futureWidthRate;
      this.leftPeriodFuture = px2;

      this.widthExistPeriodFuture = (futureExistWidthRate < 0) ? 0 : futureExistWidthRate;
      this.leftExistPeriodFuture = futureExistPx1;

      this.widthPeriodFuture = futureWidthRate;
      this.leftPeriodFuture = futureExistPx2;

      this.leftCurrentPoint = currentPoint;
      this.isShowCurrentDivision = this.currentUnixTime >= this.startTime && this.currentUnixTime <= this.endTime;
    }
  }

  private initRatesData() {
    let result: any[] = [];

    this.inputData?.health_indexes.forEach((item:any) => {
      let score = (item.health >= 80) ? 'high' : (item.health >= 70 && item.health < 79.99) ? 'medium' : (item.health >= 60 && item.health < 69.99) ? 'low' : 'critical',
        tmp = Object.assign({
          health: item.health,
          score: score,
          start_time: item.start_time,
          end_time: item.end_time,
        }, this.calculateRate(item));

      item.score = score;
      result.push(tmp);
    })

    this.ratesData = result;
  }

  private calculateRate(data:any) {
      let px1 = this.calculatePoint(data.start_time),
        px2 = (this.currentUnixTime && data.end_time > this.currentUnixTime) ? this.calculatePoint(this.currentUnixTime) : this.calculatePoint(data.end_time),
        widthRate = (px2 - px1);
      return {'width': widthRate, 'left': px1}
  };

  private initDisabledToolTip() {
    this.isDisabledToolTip = !(this.inputData.risks || this.inputData.issues);
  }

  private getEndTimePoint(endTime:number) {
    let current = this.currentUnixTime,
      currentPx = this.calculatePoint(current);
    if (endTime === null) {
      if (currentPx && this.barLength && currentPx < this.barLength) {
        return currentPx;

      } else {
        return this.barLength
      }
    } else if (current < endTime) {
      return currentPx
    } else if (endTime < this.endTime) {
      return this.calculatePoint(endTime);
    } else {
      return this.barLength
    }
  }

  private calculatePoint(unixTime:number) {
    let unixDelta = this.endTime - this.startTime;
    return ((unixTime - this.startTime) * this.barLength) / unixDelta;
  };

  private getAllHealthIdexesByTime(inputData:any, time:number) {
    let result:any = [];

    if (inputData.health_indexes) {
      inputData.health_indexes.forEach((item:any) => {
        if (item.start_time <= time && item.end_time >= time) {
          result.push(item)
        }
      })
    }

    return (result.length > 0) ? result : [{score: 'high'}];
  }
}
