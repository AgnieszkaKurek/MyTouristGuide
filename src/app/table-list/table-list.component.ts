import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TouristAttractionService } from '../tourist-attraction.service';
import { Observable } from 'rxjs';
import { TouristAttraction } from '../models/tourist-attraction';

@Component({
  selector: 'tg-table-list',
  templateUrl: './table-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableListComponent implements OnInit {
  public touristAttractions$: Observable<TouristAttraction[]>;
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
    this.touristAttractions$ = this.touristAttractionService.getTouristAttractions();
  }

}
