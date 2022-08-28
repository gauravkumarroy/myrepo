import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    this.baseUrl = 'http://localhost:8080/api/posts/'
    return this.httpClient.get<Post[]>(this.baseUrl)
      
  }
  getPostsByEmail(email: string):Observable<Object>{
    this.baseUrl = 'http://localhost:8080/api/byemail/'
    return this.httpClient.post(`${this.baseUrl}`,email);
  }

  createPost(posts: Post): Observable<Object> {
    this.baseUrl = 'http://localhost:8080/api/posts/'
    return this.httpClient.post(`${this.baseUrl}`,posts);
  }

  updatePost(post: Post): Observable<Post> {
    this.baseUrl='http://localhost:8080'
    return this.httpClient.put<Post>(this.baseUrl + '/api/posts/' + post.id, post)
  }

  deletePost(id: number): Observable<any> {
    this.baseUrl = 'http://localhost:8080'
    return this.httpClient.delete(this.baseUrl + '/api/posts/' + id);

     
  }

}

