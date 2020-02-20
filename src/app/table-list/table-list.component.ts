import { Observable } from 'rxjs';
import { TouristAttraction } from './../models/tourist-attraction';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { TouristAttractionService } from '../tourist-attraction.service';

@Component({
  selector: 'tg-table-list',
  templateUrl: './table-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListComponent implements OnInit {

  public touristAttractions$: Observable<TouristAttraction[]>;

  public constructor(
    private touristAttractionService: TouristAttractionService,
  ) { }

  public onFilterChanged(filterValue: string): void {
    console.log(filterValue);
  }

  public ngOnInit(): void {
    this.touristAttractions$ = this.touristAttractionService.getTouristAttractions();
  }

}
