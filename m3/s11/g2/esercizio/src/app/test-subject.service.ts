import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestSubjectService {

  stringSubject:Subject<string> = new Subject();//ingresso dati

  string$ = this.stringSubject.asObservable();//uscita dati


  addString(txt:string){
    this.stringSubject.next(txt)
  }


}
