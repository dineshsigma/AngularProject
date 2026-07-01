import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgFor {
  cityList:string[] = ["Pune","Banglore","Hyderabad","Nellore","SKHT"];

  employeeArray :any = [
    {empId:121,name:"Dinesh","city":"Hyderabad","mobile":"9988776655"},
    {empId:122,name:"Teja","city":"Hyderabad","mobile":"9988776655"},
    {empId:123,name:"Hema","city":"Hyderabad","mobile":"9988776655"},
    {empId:124,name:"Mona","city":"Hyderabad","mobile":"9988776655"}
  ]
}
