import { PizzaService } from './../../pizza.service';
import { iPizza } from './../../Models/ipizza';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

    pizze:iPizza[] = [];

    constructor(private pizzaSvc:PizzaService){}

    ngOnInit(){
      this.pizzaSvc.getAll().subscribe(data => this.pizze = data)
    }

    delete(id:string|undefined){
      if(id)
      this.pizzaSvc.delete(id).subscribe(res => {
          this.pizze = this.pizze.filter(p => p.id != id)
      })
    }
}
