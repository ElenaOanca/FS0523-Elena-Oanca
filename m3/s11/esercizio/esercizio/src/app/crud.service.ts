import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IProduct } from './i-product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private preferiti: any[] = [];

  private carrello: any[] = [];

  apiUrl:string = 'https://dummyson.com/products';


  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((res: any[]) => res.map((item) => item.product))
    );
  }
//lancio la chiamata http per ottenere il prodotti



  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  //salva il prodotto nel array carrello

  saveProductCarrello(product: any): Observable<any> {
    return this.http.post(this.apiUrl , product).pipe(
      tap(() => {
        this.carrello.push(product);
      })
    );
  }

  //mostra i prodotti nel carrello

  getCarrello(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((products: any[]) => {
        this.carrello = products;
      })
    );
  }



  //salva il prodotto nel array preferiti

  saveProductPreferiti(product: any): Observable<any> {
    return this.http.post(this.apiUrl , product).pipe(
      tap(() => {
        this.preferiti.push(product);
      })
    );
  }

  //mostra i preferiti nel array preferiti

  getPreferiti(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl ).pipe(
      tap((products: any[]) => {
        this.preferiti = products;
      })
    );
  }

  isProductPreferiti(product: any): boolean {
    return this.preferiti.some((item) => item.id === product.id);
  }






}






