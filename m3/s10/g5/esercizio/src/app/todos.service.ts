import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];

  constructor() {}

  private wait() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  async getTodos() {
    await this.wait();
    return this.todos;
  }

  async addTodo(title: string) {
    await this.wait();
    let id = 0;
    if (this.todos.length > 0) {
      //vado a prendere l'ultimo el pushato
      const lastTodo = this.todos[this.todos.length - 1];
      id = lastTodo.id + 1;
    }
    this.todos.push({
      id,
      title,
      completed: false,
    });
  }

  async deleteTodo(id: number) {
    await this.wait();
    //vado a prendere l'indice dell'elemento che voglio eliminare
    const i = this.todos.findIndex((todo) => todo.id === id);
    //se l'indice esiste
    if (i !== -1) {
      //vado a eliminare l'elemento
      this.todos.splice(i, 1);
    }
  }

  async updateTodo(
    id: number,
    //rendo opzionali le modifiche che si possono fare
    data: {
      title?: string;
      completed?: boolean;
    }
  ) {
    await this.wait();
    //vado a prendere l'indice dell'elemento che voglio eliminare
    const i = this.todos.findIndex((todo) => todo.id === id);
    //se l'indice esiste
    if (i !== -1) {
      //vado a modificare l'elemento
      this.todos[i] = {
        ...this.todos[i],
        ...data,
      };
    }
  }
}
