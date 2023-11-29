import { Component } from '@angular/core';
import { iPizza } from './Models/pizza';
import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  visibile:boolean = true

  pizze:iPizza[] = [];
  pizzaSelezionata:iPizza = {
    id: 0,
    gusto: '',
    prezzo: 0
  }

  constructor(private PizzaSvc:PizzaService){}

  add(pizza:iPizza){
    this.pizze.push(pizza)
  }
  remove(id:number){
    this.pizze = this.pizze.filter(p => p.id != id)
  }
  select(pizza:iPizza){
    this.pizzaSelezionata = pizza;
  }

  ngOnInit(){
    this.pizze = this.PizzaSvc.getAll()
  }

  toggleVisibility(evento:string){
    console.log(evento);

    this.visibile = !this.visibile;
  }

}
