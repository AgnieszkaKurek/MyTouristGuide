import { Observable } from 'rxjs';
import { TouristAttraction } from './../models/tourist-attraction';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TouristAttractionService } from '../tourist-attraction.service';
import { TouristAttractionListSettingService } from '../tourist-attraction-list-setting.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'tg-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListComponent implements OnInit {

  public touristAttractions$: Observable<TouristAttraction[]>;

  public constructor(
    private _touristAttractionService: TouristAttractionService,
    private _settingsService: TouristAttractionListSettingService,
  ) {
  }

  public ngOnInit(): void {
    this.touristAttractions$ = this._settingsService.settingsChanged.pipe(
      switchMap((setting) => this._touristAttractionService.getTouristAttractions(setting)),
    )
  }
}