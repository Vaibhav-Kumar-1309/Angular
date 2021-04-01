import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from 'src/models/post.model';
import { AddDisplayService } from 'src/service/add-display.service';

@Component({
  selector: 'specific-post',
  templateUrl: './specific-post.component.html',
  styleUrls: ['./specific-post.component.css']
})
export class SpecificPostComponent implements OnInit {
  id: any;
  post: PostModel = {
    userId : -1,
    id : -1,
    title : '',
    body : '',
  };
  constructor(private route: ActivatedRoute,
              private service: AddDisplayService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }

  displayPost(){
    this.service.getSpecificPost(this.id)
    .subscribe( (post) => this.post = post,
    (error: Response) => {
      if (error.status === 404)
        alert('Post of above id not found...')
      else
        alert('An error occured.')
    });
 
  }

}
