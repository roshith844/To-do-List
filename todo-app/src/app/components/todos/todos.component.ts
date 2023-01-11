import { Component, OnInit } from '@angular/core';
import { Todo } from './../../model/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos!: Todo[];
  inputTodo: string = '';
  constructor() {}
  ngOnInit() {
    this.todos = [
      {
        content: 'first todo',
        completed: false,
      },
      {
        content: 'second todo',
        completed: true,
      },
    ];
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
  toggleDone(id: number): void {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
    });
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((value, index) => {
      return index != id;
    });
  }
}
