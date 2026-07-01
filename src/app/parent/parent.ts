import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  name  = "Gundelugunta Dinesh";
  userName  = "Tejs";
  age = 27;
  showProfile = true;

  changeName() {
    this.name = 'Angular Developer';
  }

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

}
