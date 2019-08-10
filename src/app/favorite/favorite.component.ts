import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  // [is-favorite] Aliasing Input name
  @Input('is-favorite') isFavorite: boolean;

  // [change] Aliasing Input name
  @Output('change') click = new EventEmitter();
  public isBorder = true;
  constructor() { }

  bgChange() {
    this.isFavorite = !this.isFavorite;
    this.isBorder = !this.isBorder;
    this.click.emit({newValue: this.isFavorite});
  }
  ngOnInit() {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}