
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  AfterContentInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, AfterViewInit {
  @Input() userName!: string;
  intervalId: any;

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.startTracking();
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  startTracking() {
    console.log("start Tracking ........")
  }
}
