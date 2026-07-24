import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';

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
    private toastr: ToastrService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.authService.logindummyApi(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.authService.saveUserData(res);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login Successful',
          life: 3000
        });
        setTimeout(() => {
          this.router.navigate(['/dashbaord-slider']);
        }, 1500);

      }, error: (error: any) => {
        console.log("error", error.error.message);
        this.messageService.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: error?.error?.message || 'Invalid username or password',
          life: 3000
        });
      }
    })
  }
  goToRegister() {
    this.router.navigate(['/registartion']);
  }
}