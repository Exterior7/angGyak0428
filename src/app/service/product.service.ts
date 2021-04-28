import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = "https://nettuts.hu/jms/Exterior7/products";

  list$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]> ([]);

  constructor(
    private http:HttpClient,
  ) { }

  // CRUD Update

  getAll():void {
    this.http.get<Product[]>(this.apiUrl).subscribe(
      products => this.list$.next(products)
    )
  }

  get(id: string):Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  remove(product: Product):void {
    this.http.delete<Product>(`${this.apiUrl}/${product.id}`).subscribe(
      () => this.getAll()
    )
  }

  create(product:Product):Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product)
  }

  update(product:Product):Observable<Product> {
    return this.http.patch<Product> (`${this.apiUrl}/${product.id}`,product)
  }
}
