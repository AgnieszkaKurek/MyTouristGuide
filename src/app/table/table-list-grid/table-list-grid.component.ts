import { MatTableDataSource } from '@angular/material/table';
import { TouristAttraction } from '../../shared/models/tourist-attraction';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ListHistorySettingService } from '../../shared/list-history-setting.service';

@Component({
  selector: 'tg-table-list-grid',
  templateUrl: './table-list-grid.component.html',
  styleUrls: ['./table-list-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListGridComponent implements OnInit {

  @ViewChild(MatSort, { static: true })
  private _sort: MatSort;

  @Input()
  public set touristAttractions(data: TouristAttraction[]) {
    this.dataSource.data = data;
  }

  public dataSource: MatTableDataSource<TouristAttraction> = new MatTableDataSource([]);

  public columns: string[] = [
    'name',
    'category',
    'place',
    'lastVisited',
    'details',
  ];
  public constructor(
    private _router: Router,
    private _listHistorySettingService: ListHistorySettingService,
  ) {
  }

  public ngOnInit(): void {
    this.dataSource.sort = this._sort;
  }

  public showDetails(id: number): any {
    this._listHistorySettingService.backToListUrl = 'list';
    this._router.navigate([id]);
  }
}
