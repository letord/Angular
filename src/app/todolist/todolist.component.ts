import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Task} from "../model/Task"
import {TASKS} from "../model/Tasks"


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  task :Task;
  taskSelected : Task;
  tasks;
  afficheDetail : boolean;
  check ;
  constructor() {
    this.tasks=TASKS;
    this.check = new EventEmitter<boolean>();
    this.task= {
      Todo:"todo...",
      Date: new Date(),
      Urgence : "faible",
      Description : "",
      isDone : false
    };
    this.taskSelected= TASKS[0];
    this.afficheDetail =false;
   }

  ngOnInit(): void {
  }
  DonneCouleur(urgence : string): string {
    if(urgence=="faible"){
      return "transparent";
    }
    else if (urgence=="moyenne"){
      return "#FEFEE7";
    }
    else {
      return "#FAE6E5";
    }
  }
  changeVariable(){

  }
  onCheck(position : number, bool : boolean){
    TASKS[position].isDone=bool;
  }

  AddTask(){
    this.tasks.push(this.task);
    this.task= {
      Todo:"todo...",
      Date: new Date(),
      Urgence : "faible",
      Description : "",
      isDone : false
    };
  }
}
