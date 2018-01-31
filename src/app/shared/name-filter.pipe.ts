import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: any[], filter): any {
    console.log(filter);

    if (!items || !filter) {
      return items;
   }
   return items.filter(item => filter === item.name);
  }

}
