import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {Observable} from 'rxjs'
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(){
    this.posts$ = this.postService.getPosts();
  }

}
