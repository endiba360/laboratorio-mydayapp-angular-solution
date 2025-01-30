import { Component } from '@angular/core';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

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
