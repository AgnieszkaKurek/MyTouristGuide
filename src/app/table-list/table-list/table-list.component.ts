import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TouristAttractionService } from '../../tourist-attraction.service';
import { TouristAttractionListSettingService } from '../../tourist-attraction-list-setting.service';
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
