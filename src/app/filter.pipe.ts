import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(companies: any[], searchText: string) {
    if(!companies || searchText) {
      return companies
      //return[]
    };
    return companies.filter(company=>company.name.toLowerCase().indexOf(searchText.toLowerCase())!==-1)
   }
   
}
