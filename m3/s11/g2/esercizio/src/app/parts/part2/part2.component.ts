import { Component } from '@angular/core';
import { TestSubjectService } from '../../test-subject.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrl: './part2.component.css'
})
export class Part2Component {

  constructor(private tsSvc:TestSubjectService){}

  dato:string = '';

  ngOnInit(){
    this.tsSvc.string$.subscribe(res =>{
      this.dato = res
    })

  }

}
