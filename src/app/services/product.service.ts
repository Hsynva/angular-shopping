import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  fetchProduct(){
   return this.http.get<Observable<Product[]>>("https://fakestoreapi.com/products");
  }

  fetchProductLimit(limit: number){
    return this.http.get<Observable<Product[]>>(`https://fakestoreapi.com/products?limit=${limit}`);
  }
}


