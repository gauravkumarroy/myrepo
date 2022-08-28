import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePostService } from '../create-post/create-post.service';
import { Post } from '../create-post/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  loading=false;
  posts: Post[] | undefined;
  email:string;
  curr: Date = new Date();
  date: Date;
  constructor(
    private createPostService: CreatePostService,
    private router:Router
    ) {
   this.loading=true; 
  }

  ngOnInit(): void {
    this.loading=true;
    this.email=JSON.parse(localStorage.getItem('user')).email;
    this.createPostService.getPosts().subscribe((data) => {
      this.posts = data;
    });
    this.loading=false;
  }

  like(post){
    console.log(post);
  }
  comment(post){
    localStorage.setItem('post',JSON.stringify(post));
    this.router.navigate(['comment']);
    console.log(post);
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

}
