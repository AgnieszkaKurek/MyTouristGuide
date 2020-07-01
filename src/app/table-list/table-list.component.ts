import { Observable } from 'rxjs';
import { TouristAttraction } from './../models/tourist-attraction';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TouristAttractionService } from '../tourist-attraction.service';
import { TouristAttractionListSettingService } from '../tourist-attraction-list-setting.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'tg-table-list',
  templateUrl: './table-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListComponent implements OnInit {

  public touristAttractions$: Observable<TouristAttraction[]>;

  public constructor(
    private touristAttractionService: TouristAttractionService,
    private settingsService: TouristAttractionListSettingService,
  ) {
  }

  public ngOnInit(): void {
    this.touristAttractions$ = this.settingsService.settingsChanged.pipe(
      switchMap(setting => this.touristAttractionService.getTouristAttractions(setting)),
    );
  }
}
