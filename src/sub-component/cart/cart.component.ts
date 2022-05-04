import { Component, OnInit } from '@angular/core';
import { CartService } from '../../app/services/cart.service';
import { CartItem } from '../../app/models/cardİtem';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data: CartItem [] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log('',this.data.length)
    this.data = this.cartService.getAllCart();
    this.totalPriceFn();
  }

  totalSumPrice(d: CartItem){
    let productsData = this.data.map( (item: CartItem)=> {
      if(item?.product?.id == d?.product?.id){
        return  {
          ...item,
          totalPrice: +((d?.quantity as number) * (d?.product?.price as number)).toFixed(3)
        }
      }
      return item
    })
    localStorage.setItem('cart' , JSON.stringify(productsData))
    
    this.data = JSON.parse(localStorage.getItem('cart') as string)
    this.totalPriceFn()
  }

  deleteProduct(d: CartItem){
    const xdata = this.data.filter((item)=> item?.product?.id !== d?.product?.id )
    localStorage.setItem('cart' , JSON.stringify(xdata))
    this.data = JSON.parse(localStorage.getItem('cart') as string)
    this.totalPriceFn();
  }

  totalPriceFn(){
    this.totalPrice = 0;
    JSON.parse(localStorage.getItem('cart') as string).map( (item: CartItem)=> {
      this.totalPrice = +((item?.product?.price as number) * (item?.quantity as number)+ this.totalPrice).toFixed(3)
    })
  }
    
  
}
 