import { iPizza } from '../../Models/pizza';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.scss'
})
export class TabellaComponent {

  @Input() pizzeArr:iPizza[] = [];

  @Output() onDeletePizza:EventEmitter<number> = new EventEmitter();
  @Output() onSelectPizza:EventEmitter<iPizza> = new EventEmitter();

  delete(id:number){
    this.onDeletePizza.emit(id)
  }

  update(pizza:iPizza){
    this.onSelectPizza.emit(pizza);
  }

}
