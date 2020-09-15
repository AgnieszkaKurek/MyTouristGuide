import { TouristAttractionListSettingService, TouristAttractionListSetting } from '../tourist-attraction-list-setting.service';
import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'tg-table-list-paginator',
  templateUrl: './table-list-paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListPaginatorComponent implements OnInit {
  public settings$: Observable<TouristAttractionListSetting>;

  @Input()
  public length: number;

  public constructor(
    private settingsService: TouristAttractionListSettingService,
  ) {
  }

  public ngOnInit(): void {
    this.settings$ = this.settingsService.settingsChanged;
  }

  public onPageChange(event: PageEvent): void {
    this.settingsService.setPageSettings(event.pageSize, event.pageIndex);
  }
}
