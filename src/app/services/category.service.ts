import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  fetchProduct(){
    return this.http.get<Observable<Product[]>>("https://fakestoreapi.com/products");
  }
  
}
