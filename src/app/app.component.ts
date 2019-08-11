import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  canSave = true;

  onClick() {
    this.canSave = !this.canSave;
  }

}
