import { Component } from '@angular/core';
import { Todo, TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  title?: string;
  isLoading: boolean = false;
  todos:Todo[] = [];
  todoService = new TodosService();
  newTodo: Todo = {
    id: 0,
    title: '',
    completed: false,
  };
  constructor() {}

  ngOnInit() {
    this.isLoading = true;
  this.todoService.getTodos().then((todos) => {this.todos = todos; this.isLoading = false;});

}

addTodo() {
  if (!this.title) {
    return;

  }
  this.isLoading = true;
  this.todoService.addTodo(this.title);
  this.todoService.getTodos().then((todos) => {this.todos = todos; this.isLoading = false;});
  this.todos.push({ ...this.newTodo });
  this.newTodo.title = '';
}



}
