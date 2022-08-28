import { Component, OnInit } from '@angular/core';
import { User } from '../registration/user';
import { FolloweeService } from './followee.service';

@Component({
  selector: 'app-followee',
  templateUrl: './followee.component.html',
  styleUrls: ['./followee.component.css']
})
export class FolloweeComponent implements OnInit {
  users: User[]|any;
  email:string;
  curr: Date = new Date();
  date: Date;
  nodata= false;
  constructor(private followeeService: FolloweeService) {}

  ngOnInit(): void {
    this.email=JSON.parse(localStorage.getItem('user')).email;
    this.followeeService.getFollowee(this.email).subscribe((data) => {
      console.log(data);
      this.users = data;
      if(Object.keys(this.users).length===0){
        this.nodata=true;
      }
      
    });
  }
  followBack(us){
    this.followeeService.addFollower(us.password).subscribe((data) => {
      this.ngOnInit();
      console.log("Followed Back");
    },(error)=>{
      alert("Error Occured while adding in Following")
    });
  }

}
