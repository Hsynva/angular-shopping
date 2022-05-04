import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySpinnerComponent } from './my-spinner.component';



@NgModule({
  declarations: [
    MySpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MySpinnerComponent]
})
export class MySpinnerModule { }
