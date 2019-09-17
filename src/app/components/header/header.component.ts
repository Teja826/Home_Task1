import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public news_title = "BBC News";
  constructor(private router: Router, private newsService:  NewsService) { }

  ngOnInit() {
    this.newsService.headerTitle$
      .subscribe(
        message => {this.news_title = message}
      );
  }
  logout() {
    this.newsService.resetCredentials();
    document.getElementById('header_div').style.display = "none";
    this.router.navigate(['/']);
  }
}