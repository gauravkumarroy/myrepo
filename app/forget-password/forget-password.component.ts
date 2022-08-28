import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ForgetPasswordService } from './forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  submitted: boolean=false;
  userForm: any;
  email:string;

  constructor(
    private auth:AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private  forgetPasswordService:ForgetPasswordService,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  get f() { return this.userForm.controls; }
  forgotPassword(){
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
  }
    this.forgetPasswordService.searchEmail(this.email).subscribe(data=>
      {
        alert("Password reset link sent to your registered mail")
        this.router.navigateByUrl('/login');

      },
      (error)=>{
        alert("No Account Exist")
      })
  }

}
