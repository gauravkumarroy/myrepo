import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatePostService } from './create-post.service';
import { Post } from './post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  posts:Post=new Post();
  postForm: any;
  submitted = false;
  id:number;
  constructor(
    private formBuilder: FormBuilder,
    private createPostService:CreatePostService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      tittle: ['',[Validators.required]]});
      this.posts.email=JSON.parse(localStorage.getItem('user')).email;
      this.id=JSON.parse(localStorage.getItem('id'))
      this.id=this.id+1;
      localStorage.setItem('id',JSON.stringify(this.id));
      this.posts.id=this.id;
    //this.getPosts();
  }
  get f() { return this.postForm.controls; }
  userPost(){
    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
    this.createPostService.createPost(this.posts).subscribe(
      (data) => {
        this.router.navigate(['home']);
      },
      (error) => alert('Sorry,Some error happend')
    );

  }

}
