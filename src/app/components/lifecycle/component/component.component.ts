import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  SimpleChanges,
  AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy {

  counter = 1;

  constructor() {
    console.log('It is a constructor() My count value is:' + this.counter);
    this.counter++;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('I am from ngOnChanges() My count value is:' + this.counter);
    this.counter++;
  }

  ngOnInit() {
    console.log('I am from ngOnInit() My count value is:' + this.counter);
    this.counter++;
  }

  ngDoCheck() {
    console.log('I am from ngDoCheck() My count value is:' + this.counter);
    this.counter++;
  }

  ngAfterContentInit() {
    console.log('I am from ngAfterContentInit() My count value is:' + this.counter);
    this.counter++;
  }

  ngAfterContentChecked() {
    console.log('I am from ngAfterContentChecked() My count value is:' + this.counter);
    this.counter++;
  }

  ngAfterViewInit() {
    console.log('I am from ngAfterViewInit() My count value is:' + this.counter);
    this.counter++;
  }

  ngAfterViewChecked() {
    console.log('I am from ngAfterViewChecked() My count value is:' + this.counter);
    this.counter++;
  }

  ngOnDestroy() {
    console.log('I am from ngOnDestroy() My count value is:'  + this.counter);
    this.counter++;
  }
}

