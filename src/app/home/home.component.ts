import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/Todo';
import { todoStatus } from '../todoStatus/todoStatus';
import { SessionService } from '../sessionService/session.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router }  from '@angular/router';
import {fadeInOut} from '../FadeInOutAnimation/fadeInOut';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInOut()]
})
export class HomeComponent implements OnInit {
  filterStatus = "";
  sortByStatus = false;
  sortByPriority = false;
  sortById = false;
  newTodo = '';
  chosenTodos: Todo [] = new Array<Todo>();
  todos: FirebaseListObservable<any[]>;
  todo: Todo;
  constructor(db: AngularFireDatabase, private router: Router, private SessionService: SessionService) { 
      // Take firebase list observable and figure out what the last id is 
      this.todos = db.list('/'); 
      this.todos.subscribe((todos)=>{
        for(let todo of todos){
           // Set last id to keep track of new coming todos
            if(todo.id > this.SessionService.getlastId()){
            this.SessionService.setlastId(todo.id); 
          }
        }   

      })
  }

  ngOnInit() {
  

  }


  removeTodo(key: string){
    this.todos.remove(key);
  }

  removeChosenTodos(){
    this.chosenTodos.forEach((todo)=>{
      this.todos.remove(todo.$key);
    })
  }

  clearAll(){
    this.todos.remove();
  }

  completeTodo(key: string){
    this.todos.update(key, {"status": todoStatus.done});

  }

  cancelTodo(key: string){
    this.todos.update(key, {"status": todoStatus.canceled});

  }

  putBackInQueue(key: string){
    this.todos.update(key, {"status": todoStatus.inQueue});
    
  }

  onTodoClick(todo: Todo){    
    // if in the array, take out of array
      if(this.chosenTodos.indexOf(todo)!=-1)
      {
        this.chosenTodos.splice(this.chosenTodos.indexOf(todo),1);
      }
      // if not in the array, put in array
      else{
        this.chosenTodos.push(todo);
      }
  }

  isChosen(todo: Todo){
    return this.chosenTodos.indexOf(todo) > -1;
  }

  // go to edit page passing key, title and priority as params 
  navigateToEditPage(todo: Todo){
    let key = todo.$key;
    let title = todo.title;
    let priority = todo.priority.toString();
    this.router.navigate(['/edit-todo/', key, title, priority]);
  }


  onSort(){
    this.sortById = true;
  }


}
