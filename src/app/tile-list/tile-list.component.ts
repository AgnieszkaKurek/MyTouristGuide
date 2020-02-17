import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tg-tile-list',
  templateUrl: './tile-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileListComponent {
  text = 'This is Tile List';
}
