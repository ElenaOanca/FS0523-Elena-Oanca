import { Pizza } from './Models/pizza';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPizza } from './Models/ipizza';
import { Observable, Subject, filter, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizza';

  subject:Subject<string> = new Subject();
  lastPizza$ = this.subject.asObservable();

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<iPizza[]>{
    return this.http.get<iPizza[]>(this.apiUrl);
  }

  getAllNames():Observable<string[]>{
    return this.http.get<iPizza[]>(this.apiUrl)
    .pipe(map(pArr => pArr.map(p => p.gusto)));
  }

  getById(id:string):Observable<iPizza>{
    return this.http.get<iPizza>(this.apiUrl + `/${id}`);
  }

  create(pizza:Partial<iPizza>):Observable<iPizza>{
    return this.http.post<iPizza>(this.apiUrl,pizza)
    .pipe(tap(dato => this.subject.next(dato.gusto) ))
  }

  update(pizza:iPizza){
    return this.http.put<iPizza>(this.apiUrl + `/${pizza.id}`,pizza);
  }

  delete(id:string){
    return this.http.delete<iPizza>(this.apiUrl + `/${id}`);
  }

}
