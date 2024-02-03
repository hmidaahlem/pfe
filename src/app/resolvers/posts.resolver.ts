import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostsService } from '../social-media/services/posts.service';
import { Post } from '../social-media/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<Post[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.service.getpost();
  }
constructor(private service:PostsService ){}
}
