import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
  isFavorite: true,
  isDisable: true
 }

 changBgColor() {
    this.post.isFavorite = !this.post.isFavorite
 }

 onFavoriteChanged() {
   console.log('Favorite changed');
   this.post.isDisable = !this.post.isDisable
 }


}
