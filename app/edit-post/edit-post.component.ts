import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatePostService } from '../create-post/create-post.service';
import { Post } from '../create-post/post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  posts:Post=new Post();
  nochanges:boolean;
  tittle:string;
  postForm: any;
  submitted = false;
  id:number;
  constructor(
    private formBuilder: FormBuilder,
    private createPostService:CreatePostService,
    private router:Router
  ) {
    this.nochanges=false;
  }

  ngOnInit(): void {
    if(localStorage.getItem('post')===null){
      this.router.navigate(['viewpost']);
    }
    this.postForm = this.formBuilder.group({
      tittle: ['',[Validators.required]]});
      this.posts.id=JSON.parse(localStorage.getItem('post')).id;
      this.posts.title=this.tittle=JSON.parse(localStorage.getItem('post')).title;
      this.posts.email=JSON.parse(localStorage.getItem('post')).email;
      localStorage.removeItem('post');
    //this.getPosts();
  }
  get f() { return this.postForm.controls; }
  updatePost(){
    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
    if(this.posts.title==this.tittle){
      console.log(this.tittle)
      this.nochanges=true;
      return;
    }
    this.createPostService.updatePost(this.posts).subscribe(
      (data) => {
        this.router.navigate(['home']);
      },
      (error) => alert('Sorry,Some error happend')
    );

  }

}
