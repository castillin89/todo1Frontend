import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../model/Product';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private product = new BehaviorSubject<Array<Product>>([]);
  // public listOrder = this.order.asObservable();
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<Product[]>("http://localhost:8080/todo1/getAll");
  }

  addProduct(product: Product): Observable<Product>{
    console.log(product)
    return this.http.post<Product>("http://localhost:8080/todo1/addProduct",product, 
    {headers: new HttpHeaders({
      'Content-Type':  'application/json'})
    });
  }
}
