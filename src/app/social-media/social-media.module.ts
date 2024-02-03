import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostsResolver } from '../resolvers/posts.resolver';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import{MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    HttpClientModule,MatCardModule, 
  
  ],  providers: [
    PostsService,PostsResolver
  ]
})
export class SocialMediaModule { }
