import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() name!: string;
  @Input() age!:number;
}



//decorators
// life cycle hooks -- ngOnInit, ngOnChanges, ngOnDestroy, ngAfterViewInit, ngAfterContentInit
// pass data from parent to child using @Input
//pass data from child to parent using @Output and EventEmitters
// data binding - interpolation, property binding, event binding, two way binding
// Not Understable ---
// @ViewChild
// @HostListener
// @HostBinding
// migration steps from angular older version to new version
