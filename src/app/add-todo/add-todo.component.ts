import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SessionService } from '../sessionService/session.service';
import { todoStatus } from '../todoStatus/todoStatus';
import {fadeInOut} from '../FadeInOutAnimation/fadeInOut';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  animations: [fadeInOut()]
})
export class AddTodoComponent implements OnInit {

	newTodo: string;
	priorities = [1,2,3,4,5];
	todoPriority: number;
  todos: FirebaseListObservable<any[]>;


  constructor(db: AngularFireDatabase, private SessionService: SessionService) { 
    this.todos = db.list('/');
  }

  ngOnInit() {
  }

  addTodo(){
    
  	let todo = this.newTodo;
    let id = this.SessionService.getlastId() + 1;
    // 10 is for todos with no priority,
    // so that they go in the end of the list when sorted by priority
    let priority = 10;
    if(this.todoPriority)
    {
        priority = this.todoPriority;
    }

    let todoObject = { "id": id, "title": todo, "status": todoStatus.inQueue, "priority":priority};
    this.todos.push(todoObject);
    // set last id
    this.SessionService.setlastId(id);
  }

}
