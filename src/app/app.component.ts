import { Component } from '@angular/core';
import { News } from './model/News';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  newsJson: News;

  constructor() {
  }
}