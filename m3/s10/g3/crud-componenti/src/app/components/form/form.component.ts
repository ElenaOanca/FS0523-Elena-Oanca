import { Component, Output, EventEmitter, Input } from '@angular/core';
import { iPizza } from '../../Models/pizza';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  //ipizza in questo caso dice che l'evento invierà un dato di tipo ipizza
  @Output() onAddPizza:EventEmitter<iPizza> = new EventEmitter()

  @Input() newPizza:iPizza = {
    id: 0,
    gusto: '',
    prezzo: 0
  }

  generaId(){
    let rand = Math.floor(Math.random() * 1000000000)
    this.newPizza.id = rand
  }


  crea(){
    this.generaId()//solo perchè non abbiamo un backend
    //let objCopy = {...this.newPizza}
    //let objCopy = Object.assign({},this.newPizza)
    this.onAddPizza.emit(this.newPizza);
    this.newPizza = {
      id: 0,
      gusto: '',
      prezzo: 0
    }
  }

}
