import { Component, OnInit } from '@angular/core';
import { Todo } from './../../model/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos!: Todo[];
constructor(){

}
  ngOnInit(){
    this.todos = [{
      content: 'first todo',
      completed: false
    },
    {
      content: 'second todo',
      completed: true
    }]

  }
  toggleDone(id:number): void{
    this.todos.map((v,i)=>{
      if(i == id)  v.completed = !v.completed
    })
  }
  deleteTodo(id: number){
    this.todos = this.todos.filter((value, index)=>{
      return index != id
    })
  }

}
