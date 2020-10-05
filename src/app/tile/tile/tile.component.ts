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
    private touristAttractionService: TouristAttractionService,
    private settingsService: TouristAttractionListSettingService,
  ) {
  }

  public ngOnInit(): void {
    this.touristAttractions$ = this.settingsService.settingsChanged.pipe(
      switchMap(setting => this.touristAttractionService.getTouristAttractions$(setting)),
    );
  }
}
