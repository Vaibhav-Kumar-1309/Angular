import { Component } from '@angular/core';

@Component({
  selector: 'fifth-task',
  templateUrl: './fifth-task.component.html',
  styleUrls: ['./fifth-task.component.css']
})
export class FifthTaskComponent {
 codeOwner = {
   name : 'Vaibhav Kumar',
   age : 20,
   dob : new Date(2000, 9, 13),
   randomData : " I'm an outgoing person, and like hanging out with friends.I also enjoy being physically active, and spend a lot of time playing sports and team games."      
 }

}
