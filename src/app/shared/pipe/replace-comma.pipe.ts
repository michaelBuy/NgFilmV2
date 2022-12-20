import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceComma'
})
export class ReplaceCommaPipe implements PipeTransform {

  transform(value: string): string {
    if( !!value ){
      // Lorsque que l'on rencontre la virgule, on le remplace par un point
      return value.replace(/,/g,'.'); 
    } else {
      return '';
    }
  }

}
