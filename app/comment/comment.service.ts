import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentclass } from './commentclass';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private resultUrl: string;

  constructor(private httpClient:HttpClient) { 
    this.resultUrl = 'http://localhost:8080/api/createComment';
  }

  createComment(comment:Commentclass):Observable<Object>{
    console.log("backend call");
    
    return this.httpClient.post(`${this.resultUrl}`,comment);
  }
}
