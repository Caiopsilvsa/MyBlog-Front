import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post:Post
  postForm: FormGroup;
  constructor(private postService: PostService,private route:ActivatedRoute, private formBuilder: FormBuilder, private toast:ToastrService) { }

  ngOnInit(): void {
    this.loadPost() 
  }

  loadPost(){
    return this.postService.getPostByName(this.route.snapshot.paramMap.get('author')).subscribe(data => {
      this.post = data
      this.loadForm()
      console.log(this.post)
    })
  }

  loadForm(){
    this.postForm = this.formBuilder.group({
       titulo:[this.post.titulo,Validators.required],
       subTitulo:[this.post.subTitulo,Validators.required],
       categoria:[this.post.categoria, Validators.required],
       conteudo:[this.post.conteudo,Validators.required],
    })
  }

  sendForm(){
    this.postService.UpdatePost(this.postForm.value).subscribe(data =>{
      this.postForm.reset(data)
      this.toast.success("Postagem criada com sucesso") 
      //this.route.navigateByUrl('')
    })
  }
}
