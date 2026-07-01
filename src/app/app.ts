import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule  } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { NgIf } from './ng-if/ng-if'
import { NgFor } from './ng-for/ng-for';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning');
}
