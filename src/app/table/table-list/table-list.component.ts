import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TouristAttractionService } from '../../shared/tourist-attraction.service';
import { TouristAttractionListSettingService } from '../../shared/tourist-attraction-list-setting.service';
import { switchMap } from 'rxjs/operators';
import { TouristAttractionsListInfo } from '../../shared/models/tourist-attractions-list-info';

@Component({
  selector: 'tg-table-list',
  templateUrl: './table-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListComponent implements OnInit {

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
