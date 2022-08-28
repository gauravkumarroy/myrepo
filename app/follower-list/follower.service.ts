import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  private resultUrl: string;

  constructor(private httpClient:HttpClient) { 
    this.resultUrl = 'http://localhost:8080/apis/followerList';
  }

  getFollower(email:string):Observable<Object>{
    return this.httpClient.post(`${this.resultUrl}`,email);
  }
  deleteFollower(id:string):Observable<Object>{
    return (this.httpClient.delete(this.resultUrl+"/"+id));
  }
}

