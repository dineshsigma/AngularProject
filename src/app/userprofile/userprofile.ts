import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  imports: [],
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css',
})
export class Userprofile {
  user = {
    fullName: 'Gundelugunta Dinesh',
    employeeId: '00137596',
    email: 'gundelugunta.d@coforge.com',
    mobile: '8106838432',
    doj: '08-Sep-2025',
    manager: 'ANWESH MAITY',
    careerManager: 'ANWESH MAITY',
    orgUnit: 'RO ASIA',
    company: 'Coforge Limited',
    location: 'Hyderabad',
    designation: 'Senior Engineer',
    department: 'Engineering',
    profileImage: ''
  };

  getInitials(): string {
    return this.user.fullName
      .split(' ')
      .map(x => x[0])
      .join('')
      .toUpperCase();
  }
}
