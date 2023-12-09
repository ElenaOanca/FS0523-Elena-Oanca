import { Component } from '@angular/core';
import { TestSubjectService } from '../../test-subject.service';

@Component({
  selector: 'app-part4',
  templateUrl: './part4.component.html',
  styleUrl: './part4.component.css'
})
export class Part4Component {

  constructor(private tsSvc:TestSubjectService){}

  dato:string = '';

  ngOnInit(){
    this.tsSvc.string$.subscribe(res =>{
      this.dato = res
    })

  }

}
