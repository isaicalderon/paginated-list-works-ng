import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorPipe'
})
export class AuthorPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value == null){
      return null;
    }

    let completeName = `${value.given} ${value.family}`;
    return completeName;
  }

}
