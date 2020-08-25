import { MatTableDataSource } from '@angular/material/table';
import { TouristAttraction } from './../../models/tourist-attraction';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'tg-table-list-grid',
  templateUrl: './table-list-grid.component.html',
  styleUrls: ['./table-list-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListGridComponent implements OnInit {

  @ViewChild(MatSort, { static: true })
  private sort: MatSort;

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

  public ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
}
