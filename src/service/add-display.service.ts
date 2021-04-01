import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { PostModel } from 'src/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AddDisplayService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient){
  }

  //Display Post
  getAll(): Observable<PostModel[]>{
    return this.http.get<PostModel[]>(this.url);
  }

  getSpecificPost(postId: any): Observable<PostModel>{
    return this.http.get<PostModel>(this.url + '/id=postId');
  }

  //Create
  createPost(postTitle: any): Observable<any>{
    return this.http.post<any>(this.url,postTitle);
  }

  //Delete
  deletePost(postId: any): Observable<any>{
    return this.http.delete<any>(this.url + "/" + postId);
  }

}
