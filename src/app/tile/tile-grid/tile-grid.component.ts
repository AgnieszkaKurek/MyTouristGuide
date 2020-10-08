import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TouristAttraction } from '../../shared/models/tourist-attraction';

@Component({
  selector: 'tg-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileGridComponent {

  @Input()
  public attractions: TouristAttraction;

  public constructor(
    private router: Router,
  ) { }

  public showDetails(id: number): any {
    this.router.navigate([id]);
  }
}
