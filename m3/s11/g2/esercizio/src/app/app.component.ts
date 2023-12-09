import { Component } from '@angular/core';
import { TestSubjectService } from './test-subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio';

  constructor(private tsSvc:TestSubjectService){}

  testo:string = '';
  invia(){
    this.tsSvc.addString(this.testo)
  }

}
