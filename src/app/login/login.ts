import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, ReactiveFormsModule]
})


export class Login implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {

    console.log(this.loginForm.value,"00000000");

     this.router.navigate(['/dashboard']);
    // if (this.loginForm.invalid) {
    //   return;
    // }
    // this.authService.login(this.loginForm.value)
    //   .subscribe({
    //     next: (res: any) => {
    //       localStorage.setItem(
    //         'token',
    //         res.accessToken
    //       );

    //       this.toastr.success(
    //         'Login Successful',
    //         'Success'
    //       );

    //     },
    //     error: (err: any) => {
    //       this.toastr.error(
    //         err.error.message,
    //         'Invalid Password'
    //       );
    //     }
    //   });
  }
  goToRegister() {
    this.router.navigate(['/registartion']);
  }
}