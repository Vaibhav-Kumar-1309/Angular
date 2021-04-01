import { Component } from '@angular/core';

@Component({
  selector: 'first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent {

  hide:boolean = true;

  onClick(){
    this.hide = !this.hide;
  }

}
