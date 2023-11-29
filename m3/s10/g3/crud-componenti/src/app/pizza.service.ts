import { Injectable } from '@angular/core';
import { iPizza } from './Models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  pizzeArr:iPizza[] = [
    {
      id:0,
      gusto:'Margherita',
      prezzo: 5
    }
  ];

  getAll(){
    return this.pizzeArr
  }

}
