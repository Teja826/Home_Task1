import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { FormGroup, FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();
  commentForm = new FormGroup({
    comment: new FormControl('',Validators.required)
  });
  comments : [];
  constructor(private newsService: NewsService) { }
  ngOnInit() {
    this.comments = this.newsService.getComments();
    this.childEvent.emit(this.newsService.countComments());
  }
  addComment(){
    this.newsService.addComments(this.commentForm.value.comment);
    this.comments = this.newsService.getComments();
    this.childEvent.emit(this.newsService.countComments());
  }
}
