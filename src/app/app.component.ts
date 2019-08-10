import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

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

 onFavoriteChanged(eventsArgs: FavoriteChangedEventArgs) {
   console.log('Favorite changed: ', eventsArgs);
   this.post.isDisable = !this.post.isDisable
 }


}
