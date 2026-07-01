import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule  } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { NgIf } from './ng-if/ng-if'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,DataBinding,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning');
}
