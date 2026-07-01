import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule  } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning');
}
