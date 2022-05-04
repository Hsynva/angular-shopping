import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {Router} from "@angular/router"
import { CartService } from '../../../app/services/cart.service';;
import { Category } from '../../../app/models/category';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  xcolor: string = 'text-light';
  pageSize = 4;
  products: Product[] = [];
  selectedProduct!: Product;
  loading: boolean = false;
  showModal: boolean = false;
  dBlock: boolean = false;

  constructor(
    private productService: ProductService, 
    private cartService: CartService,
    private router: Router) { }
  ngOnInit(): void {
    console.log(this.products)
    this.productService.fetchProductLimit(this.pageSize).subscribe(
      (data)=> {
        this.products = data as any ;
      }
    );
  }

  getAllProducts(category: string){
    if(category){
      this.productService.fetchProductLimit(50).subscribe(
        (data)=> {
          this.products = ((data as any) as Product[]).filter(item=> item.category === category)
          console.log(this.products)
        }
      );
    }
    
  }

  onClickNextPage(){
    this.loading = true;
    this.pageSize = this.pageSize + 4;
    this.productService.fetchProductLimit(this.pageSize)
    .subscribe(
      (response)=> {
        //console.log("response",response)
        this.loading = false;
        this.products = response as any ;
      }
    );
  }
  addToCart(product: Product){
    this.cartService.newCart(product);
    this.router.navigateByUrl("/pages/cart");
  }

  addToDetail(product: Product , showModal: boolean,dBlock: boolean){
    this.selectedProduct = product;
    this.showModal = showModal;
    this.dBlock = dBlock;
  }

  closeModal(showModal: boolean,dBlock: boolean){
    this.showModal = showModal;
    this.dBlock = dBlock;
  }
}
