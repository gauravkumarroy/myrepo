import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { emit } from 'process';
import { CreatePostService } from '../create-post/create-post.service';
import { Post } from '../create-post/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
})
export class ViewPostComponent implements OnInit {
  posts: any;
  nodata=false;
  result:Post[];
  email:string;
  curr: Date = new Date();
  date: Date;
  constructor(
    private createPostService: CreatePostService,
    private router:Router
    ) {}

  ngOnInit(): void {
    this.email=JSON.parse(localStorage.getItem('user')).email;
    this.createPostService.getPostsByEmail(this.email).subscribe((data) => {
      this.posts = data;
      if(Object.keys(this.posts).length===0){
        this.nodata=true;
      }
    });
  }

  calcDate(date2) {
    this.date = new Date(date2);
    var message=''
    var diff = Math.floor(this.curr.getTime() - this.date.getTime());
    // calculate (and subtract) whole days
    var days = Math.floor(diff / 86400);
    diff -= days * 86400;
    if(days!==0){
      message=days +'minutes ago'
      return message
    }

    // calculate (and subtract) whole hours
    var hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;
    if(hours!==0){
      message=hours +' seconds ago'
      return message
    }

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(diff / 60) % 60;
    diff -= minutes * 60;
    if(minutes!==0){
      message=minutes +' minutes ago'
      return message
    }

    // what's left is seconds
    var seconds = diff % 60;
    if(seconds!==0){
      message=seconds +' seconds ago'
      return message
    }
    return message;
  }
  deletePost(event){
    console.log(event);
    
    this.createPostService.deletePost(event.id).subscribe((data) => {
      alert("Post Deleted successfully");
      this.ngOnInit()
      
    },(error)=>{
      alert("Error occured while deleting post");
      
    }
    );
    
  }
  updatePost(event){
    localStorage.setItem('post',JSON.stringify(event));
   this.router.navigate(['editpost']);
  }

}
