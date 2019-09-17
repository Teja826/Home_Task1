import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    username: 'user',
    password: 'user'
  }
  username: string;
  password: string;
  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    document.getElementById('header_div').style.display = "none";
    let credentialsSaved = this.newsService.getCredentials();
    if(credentialsSaved.hasOwnProperty('user') && credentialsSaved.hasOwnProperty('pass')) {
        this.router.navigate(['/news']);    
    }
  }
  login() {
    if(this.credentials.username === this.username && this.credentials.password === this.password) {
      document.getElementById('header_div').style.display = "block";
      this.newsService.saveCredentials(this.username, this.password);
      //this.router.navigate(['/lifecycle']);
      this.router.navigate(['/news']);
    }
    else {

    }
  }
}