import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class ContactComponent implements OnInit {

  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private route:Router, private postService:PostService, private toast:ToastrService) { }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm(){
    this.postForm = this.formBuilder.group({
       titulo:['',Validators.required],
       subTitulo:['',Validators.required],
       author:['', Validators.required],
       categoria:['', Validators.required],
       conteudo:['',Validators.required],
    })
  }

  sendForm(){
    this.postService.CreatePost(this.postForm.value).subscribe(data =>{
      this.toast.success("Postagem criada com sucesso") 
      this.route.navigateByUrl('')
    })
  }

}
