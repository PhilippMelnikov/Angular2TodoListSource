import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { SessionService } from '../sessionService/session.service';
import 'rxjs/add/operator/switchMap';
import {fadeInOut} from '../FadeInOutAnimation/fadeInOut';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
  animations: [fadeInOut()]
})
export class EditTodoComponent implements OnInit {
  priorities = [1,2,3,4,5];
  todoPriority: number;
  todoTitle: string;
  todoKey: string;

  constructor(private db: AngularFireDatabase, 
  			  private route: ActivatedRoute, 
  			  private router: Router, 
  			  private SessionService: SessionService) {

  }

  ngOnInit() {
  // Recieving parameters of todo via route.params observable
    this.route.params.subscribe((params: Params) => {
        this.todoPriority = +params['priority'];
        if(this.todoPriority == 10) this.todoPriority = undefined;
        this.todoTitle = params['title'];
        this.todoKey = params['key'];
      });

  }

  updateTodo(){

  		this.db.object('/'+this.todoKey)
  		.update({
  				title:this.todoTitle,
  			 	priority: (this.todoPriority ? this.todoPriority : 10)
  			});
    }

}
