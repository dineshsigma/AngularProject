
import { Component, OnInit ,AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy {

  constructor(){
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("ngOnInit()")
  }

  ngAfterViewInit():void{
     console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked()");
  }

  ngAfterContentInit(): void {
     console.log("ngAfterContentInit()");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked()");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy()");
  }

}
