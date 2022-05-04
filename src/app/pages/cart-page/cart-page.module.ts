import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CartModule } from 'src/sub-component/cart/cart.module';

const routesCart: Routes = [
  {path: '' , component: CartPageComponent}
]

@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    CartModule,
    RouterModule.forChild(routesCart)
  ]
})
export class CartPageModule {}
