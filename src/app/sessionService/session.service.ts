// Set and get las id to keep todo list organized 
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  lastId = -1;

  constructor() { }

 
  setlastId(id: number){
  	this.lastId = id;
  }
  getlastId(){
  	return this.lastId;
  }

}
