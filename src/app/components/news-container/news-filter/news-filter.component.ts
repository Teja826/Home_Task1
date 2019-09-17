import { Component, OnInit, Input, EventEmitter, Output   } from '@angular/core';
import { Channel } from '../../../model/Channel';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';
import { AutoUpdateService } from '../../../services/auto-update.service';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.css']
})
export class NewsFilterComponent implements OnInit {
  @Input() channelNames: Channel[];
  @Output() channelChangeEmitter: EventEmitter<Event> = new EventEmitter<Event>();
  
  allowedChannelIDs = ["bbc-news","cnn","cnbc","reuters"];
  newsChannels: Channel[] = [];
  

  constructor(private newsService: NewsService, private router: Router ,private autoUpdateService: AutoUpdateService) { }

  ngOnInit() {
    this.newsService.getNewsChannels()
    .subscribe(data => {  
      this.newsChannels = data['sources'].filter(channel => this.allowedChannelIDs.includes(channel.id));
    });
    if(this.newsService.getCredentials()['user'] === 'admin' && this.newsService.getCredentials()['pass'] === 'admin'){
      document.getElementById('addnews_div').style.display = 'block';
    }
    else{
      document.getElementById('addnews_div').style.display = 'none';
    }
  }

  onChannelChanged(event : Event) {
    this.autoUpdateService.updateNewsData(event);
  }
  addNews() {
    this.router.navigate(['/add-news']);
  }
}