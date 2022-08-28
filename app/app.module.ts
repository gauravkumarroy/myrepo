import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './all-post/post.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './my-post/view-post.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { FolloweeComponent } from './followee/followee.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CommentComponent } from './comment/comment.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    UpdateComponent,
    CreatePostComponent,
    ViewPostComponent,
    ForgetPasswordComponent,
    EditPostComponent,
    FollowerListComponent,
    FolloweeComponent,
    SpinnerComponent,
    CommentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
