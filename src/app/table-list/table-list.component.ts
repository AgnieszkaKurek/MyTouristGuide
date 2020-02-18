import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, OnDestroy } from '@angular/core';
import { TouristAttractionService } from '../tourist-attraction.service';
import { Observable, Subscription } from 'rxjs';
import { TouristAttraction } from '../models/tourist-attraction';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'tg-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListComponent implements OnInit, OnDestroy {

  private touristAttractionSub: Subscription;

  @ViewChild(MatSort, { static: true })
  private sort: MatSort;

  public dataSource: MatTableDataSource<TouristAttraction> = new MatTableDataSource([]);
  public columns: string[] = [
    'name',
    'category',
    'place',
    'lastVisited',
  ];

  public constructor(
    private touristAttractionService: TouristAttractionService,
  ) { }

  public ngOnInit() {
    this.dataSource.sort = this.sort;
    this.touristAttractionSub = this.touristAttractionService.getTouristAttractions().subscribe(touristAttractions => {
      this.dataSource.data = touristAttractions;
    });
  }

  public ngOnDestroy(): void {
    if (this.touristAttractionSub) {
      this.touristAttractionSub.unsubscribe();
    }
  }

}
