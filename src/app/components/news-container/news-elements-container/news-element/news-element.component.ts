import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/model/News';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css']
})
export class NewsElementComponent implements OnInit {
  @Input() news: News;
  @Input() index: Number
  hide: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  continueReading() {
    this.router.navigate(['news/' + this.index]);
  }
  showNgContent() {
    this.hide = !this.hide;
  }

}