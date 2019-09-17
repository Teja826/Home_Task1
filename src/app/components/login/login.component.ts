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
    password: 'user',
    admin: 'admin',
    admin_password: 'admin'
  }
  username: string;
  password: string;
  info_text :string = '';
  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    document.getElementById('header_div').style.display = "none";
    document.getElementById('form_div').style.display = "none";
    let credentialsSaved = this.newsService.getCredentials();
    if(credentialsSaved.hasOwnProperty('user') && credentialsSaved.hasOwnProperty('pass')) {
        this.router.navigate(['/news']);    
    }
  }
  userForm(){
    this.info_text = "AS USER";
    document.getElementById('form_div').style.display = "block";
    document.getElementById('admin_login').style.display = "none";
    document.getElementById('user_login').style.display = "block";

  }
  adminForm(){
    this.info_text = "AS ADMIN";
    document.getElementById('form_div').style.display = "block";
    document.getElementById('user_login').style.display = "none";
    document.getElementById('admin_login').style.display = "block";
  }
  userLogin() {
    if(this.credentials.username === this.username && this.credentials.password === this.password) {
      document.getElementById('header_div').style.display = "block";
      this.newsService.saveCredentials(this.username, this.password);
      this.router.navigate(['/news']);
    }
  }
  adminLogin(){
    if(this.credentials.admin === this.username && this.credentials.admin_password === this.password) {
      document.getElementById('header_div').style.display = "block";
      this.newsService.saveCredentials(this.username, this.password);
      this.router.navigate(['/news']);
    }
  }
}