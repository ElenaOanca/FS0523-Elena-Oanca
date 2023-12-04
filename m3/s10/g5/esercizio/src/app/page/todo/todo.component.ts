// Importazione del servizio TodosService e del Component da Angular core
import { TodosService } from './../../todos.service';
import { Component } from '@angular/core';
import { Todo } from '../../todos.service';

// Definizione del componente TodoComponent
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  // Dichiarazione delle variabili
  title?: string;
  isLoading: boolean = false;
  todos: Todo[] = [];
  todoService = TodosService.getInstance();

  deleteTodo: any;

  constructor() {}

  // Inizializzazione del componente
  ngOnInit() {
    this.isLoading = true;
    // Recupero dei todos dal servizio e aggiornamento dello stato del componente
    this.todoService.getTodos().then((todos) => {this.todos = todos; this.isLoading = false;});
  }

  // Aggiunta di un nuovo todo
  addTodo() {
    if (!this.title) {
      return;
    }
    this.isLoading = true;
    // Aggiunta del nuovo todo al servizio e aggiornamento dello stato del componente
    this.todoService.addTodo(this.title);
    this.todoService.getTodos().then((todos) => {this.todos = todos; this.isLoading = false;});
    this.title = '';
    console.log(this.todos);
  }

  // Inversione dello stato di completamento di un todo
  toggleTodo(id: number) {
    this.isLoading = true;
    // Recupero del todo tramite id, aggiornamento del suo stato di completamento e aggiornamento dello stato del componente
    const oldTodo = this.todoService.getTodoById(id);
    this.todoService.updateTodo(id, { completed: !oldTodo?.completed || false });
    this.todoService.getTodos().then((todos) => {this.todos = todos; this.isLoading = false;});
  }

  // Verifica se ci sono dei todos
  hasTodos(): boolean {
    return this.todos && this.todos.length > 0;
  }
}
