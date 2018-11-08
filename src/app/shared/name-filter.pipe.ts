import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: any[], filterItem: string): any {

   if (!items || !filterItem) {
      return items;
   }

    return items.filter(el => {
        return el.name.toLowerCase().indexOf(filterItem.toLowerCase()) > -1;
    });
  }

}
