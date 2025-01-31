import { Component, Output, Input, EventEmitter } from '@angular/core';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {
  @Input() tasks: Task[] = [];
  @Output() taskCreated = new EventEmitter<string>();

  newTask: string = '';

  createNewTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        id: Date.now().toString(),
        title: this.newTask,
        completed: false
      }
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }
}
