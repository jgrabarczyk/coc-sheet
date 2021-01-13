import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extreme'
})
export class ExtremePipe implements PipeTransform {

  transform(value: number): number {
    let extreme = Math.floor(value / 5);
    extreme = extreme === 0 && value ? 1 : extreme;
    return extreme;
  }

}
