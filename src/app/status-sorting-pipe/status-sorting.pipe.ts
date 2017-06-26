import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusSorting',
  pure: false
})
export class StatusSortingPipe implements PipeTransform {


  transform(todos: any, sortByStatus: boolean): any {

  		if(!sortByStatus) return todos;

		todos.sort(function(a, b){

		  
		  if (a.status.val < b.status.val) return -1;
		  if (a.status.val > b.status.val) return 1;

		});
		
    	return todos;
  }

}
