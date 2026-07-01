import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  firstName :string  = "Dinesh";
  lastName:string = "Gundelugunta";
  rollNo:number  =  89898;
  isActive :boolean  = true;
  currrentDate : Date =  new Date();
  myPlaceHolder  :string =  "Enter your fulll name";
  div1ClassName:string  =  "bg-primary";
  selectedCity:string = "";

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
