import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginClass } from './login-class';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private resultUrl: string;

  constructor(private httpClient:HttpClient) { 
    this.resultUrl = 'http://localhost:8080/api/login';
  }

  loginUser(user:LoginClass):Observable<Object>{
    return this.httpClient.post(`${this.resultUrl}`,user);
  }
}
