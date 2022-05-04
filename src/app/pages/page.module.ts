import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../sub-component/header/header.module';
import { FooterModule } from '../../sub-component/footer/footer.module';

const routesChild: Routes = [
  {path: '' , component: PageComponent, children: [
    {path: 'home', loadChildren: () => import('./home-pages/home-page.module').then(m => m.HomePageModule)},
    {path: 'about',loadChildren: () => import('./about-pages/about-pages.module').then(m => m.AboutPagesModule)},
    {path: 'contact', loadChildren: ()=> import('./contact-page/contact-page.module').then(m=>m.ContactPageModule)},
    {path: 'cart', loadChildren: ()=> import('./cart-page/cart-page.module').then(m=> m.CartPageModule)},
    {path:'cheked', loadChildren: ()=> import('./checked/checked.module').then(m=> m.CheckedModule)},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]},
]

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routesChild)
  ]
})
export class PageModule { }
