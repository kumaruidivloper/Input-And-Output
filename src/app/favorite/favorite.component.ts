import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  // [is-favorite] Aliasing Input name
  @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter();
  public isBorder = true;
  constructor() { }

  bgChange() {
    this.isFavorite = !this.isFavorite;
    this.isBorder = !this.isBorder;
    this.change.emit(this.isFavorite);
  }
  ngOnInit() {
  }

}
