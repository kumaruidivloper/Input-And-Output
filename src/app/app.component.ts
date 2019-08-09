import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 post = {
  title: 'Input-And-Output',

  // if isFavorite is false yellow background
  // if isFavorite is true blue background
  isFavorite: true
 }


}
