import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/models/post.model';
import { AddDisplayService } from 'src/service/add-display.service';

@Component({
  selector: 'eighth-task',
  templateUrl: './eighth-task.component.html',
  styleUrls: ['./eighth-task.component.css']
})
export class EighthTaskComponent implements OnInit {

  posts: PostModel[] = [];
  
  constructor(private service:AddDisplayService) { }

  ngOnInit(){
    this.service.getAll().subscribe((posts) => {
      this.posts = posts;
    });
  }

  addPost(input: HTMLInputElement){
    let post = { 
      id : -1,
      userId: 999,
      title: input.value,
      body : ''
    };
    input.value = '';

    this.service.createPost(post)
    .subscribe((response) => {
      post['id'] = response.id;
      this.posts.splice(0,0,post);
    });
  }
}
