import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sobvLimitString'
})
export class SobvLimitStringPipe implements PipeTransform {
  transform(str: string, limitNum: number, end: string) {
    let string = str || '',
      stringLeng = string.length;
    if(stringLeng > limitNum){
      return string.slice(0, limitNum) + end;
    }
    return string
  }

}
