import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckComponent } from './check.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
const routesChecked: Routes = [
  {path: '', component: CheckComponent},
];

@NgModule({
  declarations: [
    CheckComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesChecked)
  ],
  exports:[
    CheckComponent
  ]
})
export class CheckedModule { }
