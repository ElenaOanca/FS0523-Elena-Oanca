import { Component } from '@angular/core';
import { iPizza } from '../../Models/ipizza';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  constructor(private pizzeSvc: PizzaService){}

  newPizza:Partial<iPizza> = {
    active:true
  };

  save(){
    this.pizzeSvc.create(this.newPizza)
    .subscribe(res => console.log(res))
  }
}
