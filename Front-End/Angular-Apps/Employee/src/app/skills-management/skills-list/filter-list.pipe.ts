import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(skillList: Object[], pageNumber: number, pageSize : number): any {
    return skillList.slice((pageNumber-1) * pageSize, pageSize * pageNumber);
  }
  

}
