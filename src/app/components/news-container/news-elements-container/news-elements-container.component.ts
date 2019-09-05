import { Component, Input } from '@angular/core';
import { News } from '../../../model/News.js';
import { NewsService } from '../../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-elements-container',
  templateUrl: './news-elements-container.component.html',
  styleUrls: ['./news-elements-container.component.css']
})
export class NewsElementsContainerComponent{
  loginStatus: string = 'false';
  @Input() newsData: News[] = [];
  constructor(private router: Router) { }
}