import { Component } from '@angular/core';
import { DynamicTable } from '../shared/dynamic-table/dynamic-table';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [DynamicTable],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  
employeeColumns = [
    {
      header: 'ID',
      field: 'id'
    },
    {
      header: 'Name',
      field: 'name'
    },
    {
      header: 'Department',
      field: 'department'
    }
  ];

  employeeData = [
    {
      id: 1,
      name: 'Dinesh',
      department: 'IT'
    },
    {
      id: 2,
      name: 'Rahul',
      department: 'HR'
    }
  ];

}
