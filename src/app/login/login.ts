import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { Auth } from '../services/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class Login {

  isLoading = false;
  errorMessage = '';

  loginForm: any; // ✅ Declare first

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router 
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(";wjfguyvbejrbgvithbvi")
    console.log(this.loginForm.value)

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;


    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        console.log('Login Success:', res);

        // Save token
        localStorage.setItem('accessToken', res.accessToken);

        this.router.navigate(['/printform']);

        // alert('Login Successful');
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error.error || 'Login Failed';
      }
    });


  }
}