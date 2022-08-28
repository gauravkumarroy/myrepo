import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  private resultUrl: string;

  constructor(private httpClient:HttpClient) { 
    this.resultUrl = 'http://localhost:8080/api/searchemail';
  }

  searchEmail(email:string):Observable<Object>{
    return this.httpClient.post(`${this.resultUrl}`,email);
  }
}
