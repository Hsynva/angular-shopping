import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoryModule } from '../../../sub-component/category/category.module';
import { ProductModule } from '../../../sub-component/product/product.module';

const routesHome: Routes = [
  {path: '', component: HomePageComponent}
]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CategoryModule,
    ProductModule,
    RouterModule.forChild(routesHome)
  ]
})
export class HomePageModule { }
