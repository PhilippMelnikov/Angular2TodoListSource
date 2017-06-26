import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'statusFilter',
  pure: false
})
export class StatusFilterPipe implements PipeTransform {

  transform(todos: any, filterStatus: string): any {

    if(filterStatus == "") return todos;

    return todos.filter((todo) => {
    	return todo.status.msg==filterStatus;
    });
  }

}
