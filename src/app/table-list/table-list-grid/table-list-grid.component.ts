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

  @Input()
  public set filter(value: string) {
    this.dataSource.filter = value;
  }

  public dataSource: MatTableDataSource<TouristAttraction> = new MatTableDataSource([]);

  public columns: string[] = [
    'name',
    'category',
    'place',
    'lastVisited',
  ];

  public ngOnInit(): void {
    this.dataSource.data = this.touristAttractions;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.filterPredicate;
  }

  private filterPredicate(data: TouristAttraction, filter: string): boolean {
    filter = filter.toLocaleLowerCase();
    const { lastVisited, ...dataToFilter } = data;
    return Object.values(dataToFilter).some(value => value?.toLocaleLowerCase().includes(filter));
  }

}
