// Importazione delle dipendenze necessarie
import { Todo, TodosService } from './../../todos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  todosService = TodosService.getInstance(); // Creazione di un'istanza di TodosService

  isLoading: boolean = false;
  todos: Todo[] = []; // Inizializzazione dell'array todos come vuoto

  constructor() {}

  ngOnInit() {
    this.isLoading = true; 

    // Recupero dei todos dal servizio e filtro dei todos completati
    this.todosService.getTodos().then((todos) => {
      this.todos = todos.filter((todo) => todo.completed);

      this.isLoading = false; // Impostazione di isLoading a false dopo il recupero dei todos
    })
  }
}
