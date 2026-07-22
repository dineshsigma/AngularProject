import { Component } from '@angular/core';
import { Employee } from '../../employee/employee';

@Component({
  selector: 'app-users',
  imports: [Employee],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

}
