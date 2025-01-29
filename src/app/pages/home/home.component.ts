import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  tasks = [
    { id: '1', title: 'Learn JavaScript', completed: false },
    { id: '2', title: 'Buy a Unicorn', completed: false },
    { id: '3', title: 'Make Dinner', completed: false },
  ];
  
  constructor() { }

  ngOnInit(): void { }

}
