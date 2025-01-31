import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: Task[] = [];
  ngOnInit() {
    this.tasks = [
      { id: '1', title: 'Learn JavaScript', completed: false },
      { id: '2', title: 'Buy a Unicorn', completed: false },
      { id: '3', title: 'Make Dinner', completed: false },
    ];
  }
}
