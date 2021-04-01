import { Component,Input } from '@angular/core';

@Component({
  selector: 'second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent{
 //parent class

 taskCount = 0; 
 acknowledge = false;

 ackRecieved(){
   this.acknowledge = true;
 }

}
