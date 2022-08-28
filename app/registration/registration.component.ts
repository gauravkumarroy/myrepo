import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RegServiceService } from './reg-service.service';
import { User } from './user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:User=new User();
  userForm: any;
  submitted = false;

  constructor(
    private registerService:RegServiceService,
    private auth:AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      // alert("You already loggined ");
      this.router.navigate(['home']);
    }
    this.userForm = this.formBuilder.group({
      firstName: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
      confirmPassword: ['', Validators.required],
  }, {
      validator: this.MustMatch('password', 'confirmPassword')
  });
  }
  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }
  userRegister(){
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
  }
    this.registerService.registerUser(this.user).subscribe(data=>
      {
        alert("successfull")
        this.auth.signIn(this.user.email);
        localStorage.setItem('user',JSON.stringify(this.user));
        this.router.navigateByUrl('/home');

      },
      (error)=>{
        alert("not register")
      })
      
  }
   MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
onReset() {
  this.submitted = false;
  this.userForm.reset();
}

}
