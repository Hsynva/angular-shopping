import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routesContact: Routes = [
  { path: '', component: ContactPageComponent }
]

@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesContact)
  ]
})
export class ContactPageModule { }
