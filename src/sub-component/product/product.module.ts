
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListModule } from './product-list/product-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductListModule
  ],
  exports:[
    ProductListModule
  ]
})
export class ProductModule { }
