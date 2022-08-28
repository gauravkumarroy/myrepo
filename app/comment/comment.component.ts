import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../create-post/post';
import { CommentService } from './comment.service';
import { Commentclass } from './commentclass';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  posts:Post=new Post();
  tittle:string;
  comment:string;
  postForm: any;
  submitted = false;
  id:number;
  constructor(
    private formBuilder: FormBuilder,
    private commentService:CommentService,
    private router:Router,
  ) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('post')===null){
      this.router.navigate(['allpost']);
    }
    this.postForm = this.formBuilder.group({
      tittle: ['',[Validators.required]]});
      this.posts.id=JSON.parse(localStorage.getItem('post')).id;
      this.posts.title=this.tittle=JSON.parse(localStorage.getItem('post')).title;
      this.posts.email=JSON.parse(localStorage.getItem('post')).email;
      localStorage.removeItem('post');
 
  }
  get f() { return this.postForm.controls; }

  addComment(){
    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
   let  csmmentclass=new Commentclass(this.posts.id,this.posts.email,this.comment);
    console.log("service callled");
    
    this.commentService.createComment(csmmentclass).subscribe(
      (data) => {
        this.router.navigate(['home']);
      },
      (error) => alert('Sorry,Some error happend')
    );

  }

}
