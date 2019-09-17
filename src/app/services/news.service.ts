import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel } from '../model/Channel';
import { Observable,Subject } from 'rxjs';
import { News } from '../model/News';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsData: News[];
  newsDataObservable;
  channelId: string;
  credentials = {};
  private _headerTitleSource = new Subject<string>();
  headerTitle$ = this._headerTitleSource.asObservable();
  constructor(private http: HttpClient) { }

  sendTitle(title :string){
    this._headerTitleSource.next(title);
  }
  saveCredentials(username, password) {
    this.credentials = {
      user: username,
      pass:password
    };
  }

  getCredentials() {
    return this.credentials;
  }
  
  getNewsChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>('https://newsapi.org/v2/sources?apiKey=94a28e3dd8314a2cb51e81a385bb052a')
  }

  resetCredentials() {
    this.credentials = {};
  }

  getNewsDataForSelectedChannel(channelId: string): Observable<News[]> {
    this.channelId = channelId;
    this.newsDataObservable = this.http.get<News[]>('https://newsapi.org/v1/articles?source=' + channelId + '&apiKey=94a28e3dd8314a2cb51e81a385bb052a');
    this.saveData();
    return this.newsDataObservable;
  }

  saveData() {
    this.newsDataObservable
      .subscribe(data => { 
        this.newsData = data['articles']; 
      });    
  }

  getSelectedNews(newsId: Number) {
    let data;
    this.newsData ?
      this.newsData.map((news, index) => {
        if(index == newsId) 
          data = news;
      })
    : null;
    return data;
  }
  addNews(news: News) {
    let newsData = JSON.parse(sessionStorage.getItem("news")) ? JSON.parse(sessionStorage.getItem("news")) : [];
    newsData.push(news);
    sessionStorage.setItem("news", JSON.stringify(newsData));
  }
  addComments(comment: string) {
    let commentData = JSON.parse(localStorage.getItem("comment")) ? JSON.parse(localStorage.getItem("comment")) : [];
    if(comment != ""){
      commentData.push(comment);
      localStorage.setItem("comment", JSON.stringify(commentData));
    }
  }
  getComments() {
    let commentData = JSON.parse(localStorage.getItem("comment"));
    return commentData;
  }
  countComments(){
    let commentData = JSON.parse(localStorage.getItem("comment"));
    if(commentData == null){
      return 0;
    }
    else{
      return commentData.length;
    }
  }
}