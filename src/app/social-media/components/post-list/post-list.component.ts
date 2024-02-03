import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
posts$!:Observable<Post[]> //stocker liste de post
 public ah=[];
constructor(private route:ActivatedRoute,private service:PostsService) { }//permet d'accéder aux informations de la route

  ngOnInit(): void {
    this.posts$=this.route.data.pipe(map (data => data['posts'])
    );
  }
  /*getposts(){
    this.service.getpost().subscribe(result=>{ 
      this.ah=result;
    })

    }*/
  }


