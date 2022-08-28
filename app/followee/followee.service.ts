import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolloweeService {

  private resultUrl: string;

  constructor(private httpClient:HttpClient) { 
    this.resultUrl = 'http://localhost:8080/apis/followeeList';
  }

  getFollowee(email:string):Observable<Object>{
    return this.httpClient.post(`${this.resultUrl}`,email);
  }
  addFollower(id:string):Observable<Object>{
    this.resultUrl = 'http://localhost:8080/apis/followeeList/'+id;
    return (this.httpClient.post(`${this.resultUrl}`,id));
  }
}
