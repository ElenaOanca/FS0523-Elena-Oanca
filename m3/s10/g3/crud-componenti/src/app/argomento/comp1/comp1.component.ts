import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {

  @Input() testo!:string;
  @Input() className:string = 'btn-primary';

  @Output() onButtonClicked:EventEmitter<any> = new EventEmitter()

  invioClick(){
    this.onButtonClicked.emit()
  }

}
