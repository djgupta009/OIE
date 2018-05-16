import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterList'
})

export class FilterListPipe implements PipeTransform {

  transform(employeeList: Object[], pageNumber: number, pageSize : number): any {
    return employeeList.slice((pageNumber-1) * pageSize, pageSize * pageNumber);
  }

}
