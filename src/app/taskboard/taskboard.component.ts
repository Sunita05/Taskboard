import { Component, OnInit } from '@angular/core';
import { Task } from "./task";

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
  arr:Task[]=[
    new Task(1,'create website','14/08/2019','Online room booking','High','keerti','13/08/2019','good design','done'),
    new Task(2,'create website','10/08/2019','Highly secured','High','keerti','13/08/2019','good design','done'),
    new Task(3,'Adding filter','19/08/2019','User friendly','High','keerti','13/08/2019','good design','done'),
    new Task(4,'create website','17/08/2019','Online room booking1','High','abc','13/08/2019','good design','done'),
    // new Task(5,'create website','18/08/2019','Online room booking2','High','abc','13/08/2019','good design','done'),
    // new Task(6,'create website','19/08/2019','Online room booking3','High','abc','13/08/2019','good design','done'),
    // new Task(7,'create website','16/08/2019','Online room booking4','High','abc','13/08/2019','good design','done'),
    // new Task(8,'create website','19/08/2019','Online room booking5','High','abc','13/08/2019','good design','done'),
    // new Task(9,'create website','13/08/2019','Online room booking6','High','abc','13/08/2019','good design','done'),
    // new Task(10,'create website','24/08/2019','Online room booking7','High','abc','13/08/2019','good design','done')
  ];

  constructor() { }

  ngOnInit() {
  }

}