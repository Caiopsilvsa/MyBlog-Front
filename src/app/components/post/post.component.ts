import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post

  constructor(private postService: PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPost()
  }

  loadPost(){
    return this.postService.getPostByName(this.route.snapshot.paramMap.get('author')).subscribe(data => {
      this.post = data
    })
  }

}
