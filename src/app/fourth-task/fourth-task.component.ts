import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/models/post.model';
import { AddDisplayService } from 'src/service/add-display.service';

@Component({
  selector: 'fourth-task',
  templateUrl: './fourth-task.component.html',
  styleUrls: ['./fourth-task.component.css']
})
export class FourthTaskComponent implements OnInit{

  posts: PostModel[] = [];
  constructor(private service:AddDisplayService){
  }

  ngOnInit(){
      this.service.getAll().subscribe((posts) => {
        this.posts = posts;
      });
    }

}
