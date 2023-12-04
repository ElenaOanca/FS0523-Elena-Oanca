import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  preferiti: any[];


  constructor() { }



  ngOnInit(): void {



}

   //lancio la chiamata http per ottenere il prodotti
   getPreferiti(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((products: any[]) => {
        this.preferiti = products;
      })
    );
  }

}
