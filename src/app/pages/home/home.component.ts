import { Component, OnInit } from '@angular/core';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      { id: '1', title: 'Learn JavaScript', completed: false },
      { id: '2', title: 'Buy a Unicorn', completed: false },
      { id: '3', title: 'Make Dinner', completed: false },
    ];
  }

}
