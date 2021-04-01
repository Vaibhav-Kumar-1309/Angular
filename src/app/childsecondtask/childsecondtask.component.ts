import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'childsecondtask',
  templateUrl: './childsecondtask.component.html',
  styleUrls: ['./childsecondtask.component.css']
})
export class ChildsecondtaskComponent {
    @Input('taskCount') task_count = 0;
    @Output('acknowledgement') acknowledge = new EventEmitter;

    onClick(){
      this.acknowledge.emit();
    }
}
