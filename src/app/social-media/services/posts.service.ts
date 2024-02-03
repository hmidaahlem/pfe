import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../models/post';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  getpost():Observable<Post[]>{
  let data=this.http.get<Post[]>('http://localhost:3000/posts')
   return data;
  }
}
