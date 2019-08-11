import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public borderIsSelected:boolean = true;
  public borderStyle:boolean = false;

  onClick(){
    this.borderIsSelected = !this.borderIsSelected;
    this.borderStyle = !this.borderStyle
  }
}
