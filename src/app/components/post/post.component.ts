import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post

  constructor(private postService: PostService, private route:ActivatedRoute, private router:Router, private toast:ToastrService) { }

  ngOnInit(): void {
    this.loadPost()
  }

  loadPost(){
    return this.postService.getPostByName(this.route.snapshot.paramMap.get('titulo')).subscribe(data => {
      this.post = data
    })
  }

  deletePost(){
      return this.postService.deletePost(this.post.author).subscribe(data => {
        this.toast.error("Post deletado")
        this.router.navigateByUrl('')
      })
  }

}
