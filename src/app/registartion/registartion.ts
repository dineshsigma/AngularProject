import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registartion',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './registartion.html',
  styleUrls: ['./registartion.css']
})
export class Registartion {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private toastr: ToastrService,
    private router: Router
  ) {}


  roles = [
  {
    roleId: '11111111-1111-1111-1111-111111111111',
    roleName: 'ADMIN'
  },
  {
    roleId: '22222222-2222-2222-2222-222222222222',
    roleName: 'USER'
  },
  {
    roleId: '33333333-3333-3333-3333-333333333333',
    roleName: 'MANAGER'
  }
];

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      roleId: ['', Validators.required],

      personalDetails: this.fb.group({
        aadharNumber: ['', Validators.required],
        address: ['', Validators.required],
        panCard: ['', Validators.required]
      })
    });
  }

  register(): void {

    if (this.registerForm.invalid) {
      this.toastr.error('Please fill all required fields');
      return;
    }

    console.log("this.registerForm.value",this.registerForm.value);

    this.authService.register(this.registerForm.value)
      .subscribe({
        next: (res: any) => {

          this.toastr.success('Registration Successful');

          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        },

        error: (err) => {
          this.toastr.error(
            err?.error?.message || 'Registration Failed'
          );
        }
      });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}