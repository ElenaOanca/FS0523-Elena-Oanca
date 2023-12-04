import { Component } from '@angular/core';
import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-http';

  constructor(private pizzaSvc:PizzaService){}

  lastPizza:string = '';

  ngOnInit(){
    this.pizzaSvc.lastPizza$.subscribe(res => {
      this.lastPizza = res;
    })
  }

}
