import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idSorting',
  pure: false
})
export class IdSortingPipe implements PipeTransform {

  transform(todos: any, sortById: boolean): any {
  	
    if(!sortById) return todos;

    todos.sort(function(a, b){
		  if (a.id > b.id) return 1;
		  if (a.id < b.id) return -1;

		});

    	return todos;

  }

}
