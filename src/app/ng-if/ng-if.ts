import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIf {

  div1Viasiable :boolean  = true;

  hideDiv(){
    this.div1Viasiable = false;
  }

   showDiv(){
    this.div1Viasiable = true;
  }
}
