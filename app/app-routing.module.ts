import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './all-post/post.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateComponent } from './update/update.component';
import { ViewPostComponent } from './my-post/view-post.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { FolloweeComponent } from './followee/followee.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registr',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'allpost',
    component: PostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'createpost',
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editpost',
    component: EditPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update',
    component: UpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'viewpost',
    component: ViewPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'forgotpassword',
    component:ForgetPasswordComponent

  },
  {
    path:'followee',
    component:FollowerListComponent,
    canActivate: [AuthGuard],

  },
  {
    path:'follower',
    component:FolloweeComponent,
    canActivate: [AuthGuard],

  },
  {
    path:'comment',
    component:CommentComponent,
    canActivate: [AuthGuard],

  },
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: '/login',
    
  },

  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
