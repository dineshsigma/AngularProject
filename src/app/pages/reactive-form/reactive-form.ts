import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  userForm:FormGroup = new FormGroup({
    fname : new FormControl("",[Validators.required]),
    lname : new FormControl("",[Validators.required]),
    uname : new FormControl(""),
    city  : new FormControl(""),
    state : new FormControl("SKHT"),
    zipCode : new FormControl(""),
    isAggreTerm : new FormControl(false)
  })

  onUserSave(){
    const formValues  =  this.userForm.value;
    console.log("formValues",formValues);
  }
}
