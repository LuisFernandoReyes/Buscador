import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const searchTerm = args[0].toLowerCase();
    const resultsData = [];

    for (const element of value) {
      const itemTitle = element.recordData.dc_title.toLowerCase();

      if (itemTitle.indexOf(searchTerm) > -1) {
        resultsData.push(element);
      }
    }

    return resultsData;
  }
}