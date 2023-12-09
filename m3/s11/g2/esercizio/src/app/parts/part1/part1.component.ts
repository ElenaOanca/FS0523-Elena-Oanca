import { Component } from '@angular/core';
import { TestSubjectService } from '../../test-subject.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrl: './part1.component.css'
})
export class Part1Component {


  constructor(private tsSvc:TestSubjectService){}

  dato:string[] = [];

  ngOnInit(){
    this.tsSvc.string$.subscribe(res =>{
      this.dato.push(res)
    })

  }

}
