import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prioritySorting',
  pure: false
})
export class PrioritySortingPipe implements PipeTransform {

  transform(todos: any, sortByPriority: boolean): any {
    if(!sortByPriority) return todos;

    todos.sort(function(a, b){
		  if (a.priority > b.priority) return 1;
		  if (a.priority < b.priority) return -1;

		});

    	return todos;

  }

}
