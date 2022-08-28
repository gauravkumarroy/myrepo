import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../registration/user';
import { UpdateService } from './update.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user:User=new User();

  constructor(
    private updateService:UpdateService,
    private auth:AuthService,
    private router: Router,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.user.fname=JSON.parse(localStorage.getItem('user')).fname;
    this.user.lname=JSON.parse(localStorage.getItem('user')).lname;
    this.user.email=JSON.parse(localStorage.getItem('user')).email;

  }
  update(){
    this.updateService.updateUser(this.user).subscribe(data=>
      {
        alert("successfull")
        this.auth.signIn(this.user.email);
        localStorage.setItem('user',JSON.stringify(this.user));
        this.router.navigateByUrl('/home');

      },
      (error)=>{
        alert("not Updated")
      })
      
  }

}
