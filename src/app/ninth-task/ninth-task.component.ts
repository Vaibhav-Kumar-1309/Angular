import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/models/post.model';
import { AddDisplayService } from 'src/service/add-display.service';

@Component({
  selector: 'ninth-task',
  templateUrl: './ninth-task.component.html',
  styleUrls: ['./ninth-task.component.css']
})
export class NinthTaskComponent implements OnInit {

  posts: PostModel[] = [];
  constructor(private service: AddDisplayService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((posts) => {
      this.posts = posts;
    });
  }

  delete(post: any){
    this.service.deletePost(post.id)
    .subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}
