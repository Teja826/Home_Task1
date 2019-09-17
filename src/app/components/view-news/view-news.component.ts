import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from 'src/app/model/News';
 
@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {
  news: News;
  count;
  constructor(private router: ActivatedRoute, private routerNavigator: Router, private newsService: NewsService) { }

  ngOnInit() {
    let credentialsSaved = this.newsService.getCredentials();
    if(!credentialsSaved.hasOwnProperty('user') && !credentialsSaved.hasOwnProperty('pass')) {
        this.routerNavigator.navigate(['/']);    
    }
    this.router.params.subscribe(data => {
      this.news = this.newsService.getSelectedNews(data.id);
      if(this.news === undefined)
        this.routerNavigator.navigate(['news']);
    });
  }
}