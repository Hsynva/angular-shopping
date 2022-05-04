import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.submitFormFn();
  }

  submitFormFn(){
    this.form = new FormGroup({
      name: new FormControl('',{
        validators: [
          Validators.required,
          Validators.minLength(3),
        ]
      }),
      message: new FormControl("",{
        validators: [
          Validators.required,
          Validators.minLength(4)
        ]
      }),
      email: new FormControl("",{
        validators: [
          Validators.required,
          Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")
        ]
      })
      
    });

  }
  saveForm(){
    if(this.form){
      this.form.reset();
    }
  }
}
