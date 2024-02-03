import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments!: Comment[];
  commentCtrl!: FormControl;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.commentCtrl = this.builder.control('', [Validators.required, Validators.minLength(10)]);
  }
  onLeaveComment(){

  }
}
