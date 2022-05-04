import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPagesComponent } from './about-pages.component';
import { Routes, RouterModule } from '@angular/router';

const routersAbout: Routes = [
  { path: '', component: AboutPagesComponent }
]

@NgModule({
  declarations: [
    AboutPagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routersAbout)
  ]
})
export class AboutPagesModule { }
