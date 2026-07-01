import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  firstName :string  = "Dinesh";
  lastName:string = "Gundelugunta";
  rollNo:number  =  89898;
  isActive :boolean  = true;
  currrentDate : Date =  new Date();

  constructor(){
    console.log(this.firstName,"firstName");
  }
}
