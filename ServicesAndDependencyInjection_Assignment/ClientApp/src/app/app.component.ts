import { Component } from '@angular/core';
import { userService } from './User.service';
import { counterService } from './Counter.service';
import { OnInit } from '@angular/core';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[userService]
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app';
  inactiveCounter: number = 0;
  activeCounter: number = 0;
  constructor(private counterservice: counterService) { }

  ngOnInit() {
    this.inactiveCounter = this.counterservice.inactiveCounter;
    this.activeCounter = this.counterservice.activeCounter;
  }
  ngDoCheck() {
    this.inactiveCounter = this.counterservice.inactiveCounter;
    this.activeCounter = this.counterservice.activeCounter;
  }
 
}
