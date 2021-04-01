import { Component } from '@angular/core';

@Component({
  selector: 'seventh-task',
  templateUrl: './seventh-task.component.html',
  styleUrls: ['./seventh-task.component.css']
})
export class SeventhTaskComponent {
  userData: any;
  genderOptions = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Others' },
  ];

  submit(loginData: any) {
    this.userData = loginData;
    console.log("Login successful...");
  }

}
