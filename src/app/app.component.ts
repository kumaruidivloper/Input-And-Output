import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task = {
    title: 'Review application',
    assignee: null
  }

  taskTwo = {
    title: 'Review application',
    assignee: {
      name: 'Kumar'
    }
  }
}
