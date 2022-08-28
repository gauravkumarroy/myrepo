import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../registration/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private resultUrl: string;

  constructor(private httpClient:HttpClient) { 
    this.resultUrl = 'http://localhost:8080/api/update';
  }

  updateUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.resultUrl}`,user);
  }
}
