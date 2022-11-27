import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = environment.apiUrl
  post: Post[] = []

  constructor(private http: HttpClient) { }

  getPosts(){
      return this.http.get<Post[]>(this.baseUrl + 'post').pipe(
        map(post => {
          this.post = post
          return post
        })
      )
  }

  getPostByName(titleName: string){
      return this.http.get<Post>(this.baseUrl + 'post/posts/' + titleName)
  }

  CreatePost(post: Post){
    return this.http.post<Post>(this.baseUrl + 'post', post)
  }

  deletePost(titleName:string){
    return this.http.delete<Post>(this.baseUrl + 'post/posts/' + titleName)
  }
}
