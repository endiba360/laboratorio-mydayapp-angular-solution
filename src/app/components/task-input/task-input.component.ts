import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

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
