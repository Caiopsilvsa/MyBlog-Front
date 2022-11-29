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
  posts: Post[] = []
  postChange: boolean = true

  constructor(private http: HttpClient) { }

  getPosts(){
    if(this.posts.length > 0 && this.postChange == false)  return of(this.posts)                                                                                                                     
    
      return this.http.get<Post[]>(this.baseUrl + 'post').pipe(
        map(posts => {
          this.posts = posts
          this.postChange = false
          return posts
        })
      )
  }

  getPostByName(autor: string){
      const post = this.posts.find(x => x.author === autor)
      if(post) return of(post)

      return this.http.get<Post>(this.baseUrl + 'post/posts/' + autor)
  }

  CreatePost(post: Post){
    return this.http.post<Post>(this.baseUrl + 'post', post).pipe( 
      map(() =>{
        this.postChange = true
        const index = this.posts.indexOf(post)
        this.posts[index] = {...this.posts[index], ...post}
      })
    )
  }

  UpdatePost(post :Post){
    return this.http.put<Post>(this.baseUrl + 'post', post)
  }

  deletePost(titleName:string){
    return this.http.delete<Post>(this.baseUrl + 'post/posts/' + titleName).pipe(
      map(() => {
        this.postChange = true
      })
    )
  }
}
