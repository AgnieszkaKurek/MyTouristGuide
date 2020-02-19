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
  public touristAttractions: TouristAttraction[];

  public dataSource: MatTableDataSource<TouristAttraction> = new MatTableDataSource([]);

  public columns: string[] = [
    'name',
    'category',
    'place',
    'lastVisited',
  ];

  public filter(value: string): void { // change it to be type script setter
    this.dataSource.filter = value;
  }

  public ngOnInit(): void {
    this.dataSource.data = this.touristAttractions;
    this.dataSource.sort = this.sort;
  }

}