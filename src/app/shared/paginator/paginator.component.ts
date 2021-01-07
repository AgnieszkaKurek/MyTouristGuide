import { TouristAttractionListSettingService, TouristAttractionListSetting } from '../tourist-attraction-list-setting.service';
import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'tg-paginator',
  templateUrl: './paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnInit {
  public settings$: Observable<TouristAttractionListSetting>;

  @Input()
  public length: number;

  public constructor(
    private _settingsService: TouristAttractionListSettingService,
  ) {
  }

  public ngOnInit(): void {
    this.settings$ = this._settingsService.settingsChanged;
  }

  public onPageChange(event: PageEvent): void {
    this._settingsService.setPageSettings(event.pageSize, event.pageIndex);
  }
}
