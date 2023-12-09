import { Component } from '@angular/core';
import { TestSubjectService } from '../../test-subject.service';

@Component({
  selector: 'app-part5',
  templateUrl: './part5.component.html',
  styleUrl: './part5.component.css'
})
export class Part5Component {

  constructor(private tsSvc:TestSubjectService){}

  dato:string = '';

  ngOnInit(){
    this.tsSvc.string$.subscribe(res =>{
      this.dato = res
    })

  }

}
