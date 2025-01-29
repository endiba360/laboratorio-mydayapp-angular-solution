import { Component, Input } from '@angular/core';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task!: Task;
}
