import {Injectable} from '@angular/core';
import * as moment from 'moment'
// This service need to save with of rate bar while scroll bar is appeared.
// If you don't save service vertical line and width of rate bar will be corrupted because scroll bar change width of window

@Injectable({
  providedIn: 'root'
})
export class SobvRateScrollService {
  storageRate: any = {}

  constructor() {
  }

  /**
   * This function create init data for reader timeline for project health analytics
   * @param startTime
   * @param endTime
   * @returns {Array}
   */
  initTimeLineRate(startTime: number, endTime: number): moment.Moment[] {
    let timeLine = [],
      tmpTimeStamp = startTime,
      delta = this.getTimeLineDelta(startTime, endTime);

    while (tmpTimeStamp <= endTime) {
      let tmpDataObj = moment(tmpTimeStamp * 1000);
      // tmpDataObj._isToday = tmpDataObj.isSame(moment(), 'day');

      timeLine.push(tmpDataObj);
      tmpTimeStamp += delta;
    }

    return timeLine;
  }

  /**
   * calculate delta diff between startTime and endTime
   * @param startTime
   * @param endTime
   * @returns {number}
   */
  getTimeLineDelta(startTime: number, endTime: number): number {
    return (endTime - startTime) / 6
  }

}
