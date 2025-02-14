import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prasad',
  standalone: false
})
export class PrasadPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

  
    return value
      .split(' ')
      .map((v) => v.charAt(0))
      .join('')
      .toUpperCase();;
  }

}
