import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { LoginClass } from './login-class';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:LoginClass=new LoginClass();
  returnUrl!: string;
  loading=false;
  submitted: boolean=false;
  userForm: any;
  email:string;
  password:string;
  constructor(
    private loginServiceService: LoginServiceService,
    private authService: AuthService,
    private router: Router,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit() {
    if(this.authService.isLoggedIn()){
      // alert("You already loggined ");
      this.router.navigate(['home']);
    }
    this.returnUrl=this.route.snapshot.queryParams['returnUrl']||'home';
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }
  get f() { return this.userForm.controls; }
  
  userlogin() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
  }
    this.loginServiceService.loginUser(this.user).subscribe(
      (data) => {
        console.log('data recived');
        console.log(data);
        localStorage.setItem('user',JSON.stringify(data));
        this.authService.signIn(this.user.email);
        this.router.navigateByUrl(this.returnUrl);
      },
      (error) => alert('Sorry,Please enter correct UserId and Password')
    );
  }
  

}
