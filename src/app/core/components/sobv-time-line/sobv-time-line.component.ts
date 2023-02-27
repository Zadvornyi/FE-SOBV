import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {SobvRateScrollService} from "../../services/sobv-rate-scroll.service";

@Component({
  selector: 'sobv-time-line',
  templateUrl: './sobv-time-line.component.html',
  styleUrls: ['./sobv-time-line.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class SobvTimeLineComponent {
  @ViewChild("timelineCon", {static: true, read: ElementRef}) timelineCon?: ElementRef;
  @Input('startTime') public startTime?: number;
  @Input('endTime') public endTime?: number;
  @Input('timeLine') public timeLine?: Array<any>;

  barLength?: number;
  timeLineData?: Array<any>;

  constructor(private hostElement: ElementRef,
              private renderer: Renderer2,
              private sobvRateScroll: SobvRateScrollService) {
  }


  ngOnInit() {
    this.calculateTimeLineLeng();
    this.initTimeLineData();
    this.sobvRateScroll.storageRate = {};
  }

  ngOnChanges(changesObj: any) {
    if (changesObj.timeLine) {
      this.calculateTimeLineLeng();
      this.initTimeLineData();
    }
  }

  onResize(event:UIEvent) {
    this.calculateTimeLineLeng();
    this.initTimeLineData();
    this.sobvRateScroll.storageRate = {};
  }

  private calculateTimeLineLeng() {
    let scrollbarWidth = 20, // width of scroll bar
      widthParent = this.hostElement.nativeElement.parentElement.clientWidth - scrollbarWidth;
    //save prev width for alining future rate bar according to appearing scrollbar
    if (this.sobvRateScroll.storageRate.width && this.sobvRateScroll.storageRate.width) {
      widthParent = this.sobvRateScroll.storageRate.width
    } else {
      this.sobvRateScroll.storageRate.width = widthParent;
    }

    this.renderer.setStyle(this.timelineCon?.nativeElement, 'width', widthParent + 'px');
    this.barLength = widthParent;
  };

  private initTimeLineData() {
    let result: any[] = [];

    this.timeLine?.forEach(item => {
      let tmp = Object.assign({
        date: item.format('D MMM'),
        year: item.format('YYYY')
      }, this.calculateTimeline(item))

      result.push(tmp)
    })
    this.timeLineData = result;
  }

  private calculateTimeline(data: any) {
    if (!this.endTime && !this.startTime) return
    // @ts-ignore: Object is possibly 'undefined'.
    let delta = (this.endTime - this.startTime) / 6,
      px1 = this.calculatePoint(data.unix()),
      px2 = this.calculatePoint(data.clone().add(delta, 's').unix()),
      // @ts-ignore: Object is possibly 'undefined'.
      widthRate = (px2 - px1);
    return {'width': widthRate, 'left': px1}
  };

  private calculatePoint(unixTime: number) {
    if (!this.endTime && !this.startTime) return
    // @ts-ignore: Object is possibly 'undefined'.
    let unixDelta = this.endTime - this.startTime;
    // @ts-ignore: Object is possibly 'undefined'.
    return ((unixTime - this.startTime) * this.barLength) / unixDelta;
  };
}
