import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  userObj: any = {
    "firstName": "",
    "lastName": "",
    "userName": "",
    "city": "",
    "state": "",
    "ZipCode": "",
    "isTermsAggre": false
  }
  

  onSubmit(){

    let formValues  = this.userObj;
    console.log(formValues,"formValues")

  }
}
