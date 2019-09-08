import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/model/News';
import { NewsService } from '../../services/news.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  addNewsForm: FormGroup;
  submitted: boolean = false;
  imageURL: string = 'https://image.flaticon.com/icons/svg/21/21601.svg';

  constructor(private router: Router, private newsService: NewsService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    let credentialsSaved = this.newsService.getCredentials();
    if(!credentialsSaved.hasOwnProperty('user') && !credentialsSaved.hasOwnProperty('pass')) {
        this.router.navigate(['/']);    
  }
  this.addNewsForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    imageUrl: [this.imageURL, Validators.required]
   });
  }
  addNews() {
    this.submitted = true;
    if (this.addNewsForm.invalid) {
      return;
    }
    let formJson:News = {
      title: this.addNewsForm.value.title, 
      description: this.addNewsForm.value.description, 
      urlToImage: this.addNewsForm.value.imageUrl,
      publishedAt: String(new Date()),
      author: "You",
      url: 'user defined link'
    }
    this.newsService.addNews(formJson);
    this.router.navigate(['/news']);
  }

  cancel() {
    this.router.navigate(['/news']);
  }

}