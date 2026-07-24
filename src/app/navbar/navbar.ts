import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  constructor(private router: Router, private authService: Auth) { }
  isDarkMode = false;
  user: any;


  ngOnInit(): void {
    this.user = this.authService.getUser();
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.isDarkMode = savedTheme === 'dark';
    document.body.setAttribute(
      'data-theme',
      savedTheme
    );
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const theme =
      this.isDarkMode ? 'dark' : 'light';
    document.body.setAttribute(
      'data-theme',
      theme
    );
    localStorage.setItem(
      'theme',
      theme
    );
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
