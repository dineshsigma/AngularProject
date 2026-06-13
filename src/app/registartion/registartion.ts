import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistartionService } from '../services/registartion-service';

@Component({
  selector: 'app-registartion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registartion.html',
  styleUrl: './registartion.css',
})

export class Registartion implements OnInit {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private registrationService: RegistartionService) { }

  ngOnInit(): void {
    this.loadUsersData();
  }

  loadUsersData() {
    console.log('Loading user data... Dinesh');
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);

      this.registrationService.register(this.user).subscribe({
        next: (res) => {
          console.log('Success:', res);
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });

    }
  }

}
