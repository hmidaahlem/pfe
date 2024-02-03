import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortenPipe } from './pipes/shorten.pipe';
import { HightlightDirective } from './directives/hightlight.directive';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    ShortenPipe,
    HightlightDirective,
  
    CommentsComponent,
  ],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[
    MaterialModule,HightlightDirective, CommentsComponent,
  ]
})
export class SharedModule { }
