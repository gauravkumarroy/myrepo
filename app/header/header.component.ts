import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:any;
  email:any;
 public userName:string 
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() :void{ 
    this.name=JSON.parse(localStorage.getItem('user')).fname+" "+JSON.parse(localStorage.getItem('user')).lname;
    this.email=JSON.parse(localStorage.getItem('user')).email
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

}
