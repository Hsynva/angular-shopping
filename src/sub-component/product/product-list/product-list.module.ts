
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MySpinnerModule } from 'src/sub-component/my-spinner/my-spinner.module';
import { CategoryModule } from '../../category/category.module';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MySpinnerModule,CategoryModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductListModule { }
