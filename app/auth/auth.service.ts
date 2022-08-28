import { Injectable } from '@angular/core';
import { User } from '../registration/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  public signIn(email: string){
    localStorage.setItem('email',JSON.stringify(email));
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}


