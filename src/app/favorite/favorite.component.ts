import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  // [is-favorite] Aliasing Input name
  @Input('is-favorite') isFavorite: boolean;
  constructor() { }

  bgChange() {
    this.isFavorite = !this.isFavorite
  }
  ngOnInit() {
  }

}
