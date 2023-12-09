import { Component } from '@angular/core';
import { TestSubjectService } from '../../test-subject.service';

@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrl: './part3.component.css'
})
export class Part3Component {

  constructor(private tsSvc:TestSubjectService){}

  dato:string = '';

  ngOnInit(){
    this.tsSvc.string$.subscribe(res =>{
      this.dato = res
    })

  }

}
