import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'half'
})
export class HalfPipe implements PipeTransform {

  transform(value: number): number {
    let half = Math.floor(value / 2);
    half = half === 0 && value ? 1 : half;

    return half;
  }

}
