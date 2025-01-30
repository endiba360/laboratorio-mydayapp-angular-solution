import { Component, Input } from '@angular/core';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() tasks: Task[] = [];
}
