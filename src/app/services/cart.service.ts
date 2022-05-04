import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { CartItem } from '../../app/models/cardİtem';

@Injectable({
  providedIn: "root",
})
export class CartService {
  public items: CartItem[] = [];
  public itemCount: number = 0;
  public totalPrice: number = 0;

  constructor() {}

  newCart(product: Product, quantity: number = 1, totalPrice: number = product.price) {
    let item = this.items.find(item=> item?.product?.id == product.id);

    if(item !=undefined && quantity!=undefined && item?.quantity !=undefined){
      item.quantity  += quantity;
      item.totalPrice = (item?.product?.price as number )* item.quantity
    }
    else { 
      this.items.push( new CartItem(product,quantity,totalPrice) );
    }

    if(localStorage.getItem('cart') === null){
      localStorage.setItem('cart','[]') 
    }
    localStorage.setItem('cart' , JSON.stringify(this.items))
  }
  getAllCart() {
    let data = JSON.parse(localStorage.getItem('cart') as string);
    return data
  } 
} 
