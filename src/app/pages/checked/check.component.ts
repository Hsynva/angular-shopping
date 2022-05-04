import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.submitFormFn()
  }

  submitFormFn(){
    this.form = new FormGroup({
      name: new FormControl('',{
        validators: [
          Validators.required,
          Validators.minLength(3),
        ]
      }),
      address: new FormControl("",{
        validators: [
          Validators.required,
          Validators.minLength(4)
        ]
      }),
      city: new FormControl("",{
        validators: [
          Validators.required,
          Validators.minLength(4)
        ]
      }),
      phone: new FormControl("",{
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern("[0-9][0-9]{9}")
        ]
      }),
      email: new FormControl("",{
        validators: [
          Validators.required,
          Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")
        ]
      })
      
    });

    console.log(this.form)
  }

  saveForm(){
    if(this.form){
      this.form.reset();
    }
  }
}

