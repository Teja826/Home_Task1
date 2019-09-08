import { Component, OnInit, Input  } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from 'src/app/model/News';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AutoUpdateService } from '../../services/auto-update.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {
  newsData: News[] = [];
  newsChannel;
  subscription: Subscription;
  allowedChannelIDs = ["bbc-news","cnn","cnbc","reuters"];
  constructor(private newsService: NewsService, private routerNavigator: Router, private router: ActivatedRoute, private spinner: NgxSpinnerService, private autoUpdateService: AutoUpdateService) { }

  ngOnInit() {
    let credentialsSaved = this.newsService.getCredentials();
    if(!credentialsSaved.hasOwnProperty('user') && !credentialsSaved.hasOwnProperty('pass')) {
        this.routerNavigator.navigate(['/']);    
    }

    this.spinner.show();
    this.channelChange({'target' : {value : this.allowedChannelIDs[0]}});

    this.subscription = this.autoUpdateService.getNewsData().subscribe(data => {
      this.channelChange({'target' : {value : data}});
    })
  }

  async channelChange(event) {
    this.newsData = [];
    await this.newsService.getNewsChannels()
    .subscribe(data => {  
      this.newsChannel = data['sources'].filter(channel => event.target.value.includes(channel.id));
      this.newsService.sendTitle(this.newsChannel[0].name);
    });
    await this.newsService.getNewsDataForSelectedChannel(event.target.value)
      .subscribe(data => { 
        this.newsData = [...data['articles'], ...JSON.parse(sessionStorage.getItem("news")) ? JSON.parse(sessionStorage.getItem("news")) : []];
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}