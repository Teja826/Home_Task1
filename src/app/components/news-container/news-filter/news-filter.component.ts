import { Component, OnInit, Input, EventEmitter, Output   } from '@angular/core';
import { Channel } from '../../../model/Channel';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

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
  

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getNewsChannels()
    .subscribe(data => {  
      this.newsChannels = data['sources'].filter(channel => this.allowedChannelIDs.includes(channel.id));
      console.log(this.newsChannels)
    });
  }

  onChannelChanged(event : Event) {
    this.channelChangeEmitter.emit(event);

  }
  addNews() {
    this.router.navigate(['/add-news']);
  }
}