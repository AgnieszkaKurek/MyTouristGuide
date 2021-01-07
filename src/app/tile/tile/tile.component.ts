import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TouristAttractionsListInfo } from '../../shared/models/tourist-attractions-list-info';
import { TouristAttractionService } from '../../shared/tourist-attraction.service';
import { TouristAttractionListSettingService } from '../../shared/tourist-attraction-list-setting.service';

@Component({
  selector: 'tg-tile',
  templateUrl: './tile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent implements OnInit {

  public touristAttractions$: Observable<TouristAttractionsListInfo>;

  public constructor(
    private _touristAttractionService: TouristAttractionService,
    private _settingsService: TouristAttractionListSettingService,
  ) {
  }

  public ngOnInit(): void {
    this.touristAttractions$ = this._settingsService.settingsChanged.pipe(
      switchMap(setting => this._touristAttractionService.getTouristAttractions$(setting)),
    );
  }
}
