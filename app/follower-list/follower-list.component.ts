import { Component, OnInit } from '@angular/core';
import { User } from '../registration/user';
import { FollowerService } from './follower.service';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent implements OnInit {

  user: User[]|any;
  email:string;
  curr: Date = new Date();
  date: Date;
  nodata= false;
  constructor(private followerService: FollowerService) {}

  ngOnInit(): void {
    this.email=JSON.parse(localStorage.getItem('user')).email;
    this.followerService.getFollower(this.email).subscribe((data) => {
      console.log(data);
      this.user = data;
      if(Object.keys(this.user).length===0){
        this.nodata=true;
      }
      
    });
  }
  unFollow(us){
    this.followerService.deleteFollower(us.password).subscribe((data) => {
      this.ngOnInit();
      console.log("delete follower");
    },(error)=>{
      alert("Error Occured while UnFollowing")
    });
  }
  }

