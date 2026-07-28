import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  firstName  = "Dinesh";
  lastName = "Gundelugunta";
  rollNo =  89898;
  isActive  = true;
  currrentDate  =  new Date();
  myPlaceHolder  =  "Enter your fulll name";
  div1ClassName =  "bg-primary";
  selectedCity = "";

  constructor(){
    console.log(this.firstName,"firstName");
  }

  showWelcomeMessage(){
    alert("Welcome Angular tutorials");
  }

  onCityChange(){
    console.log("city changes");
  }
}
