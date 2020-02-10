import { Component, OnInit } from '@angular/core';
import { TouristAttractionService } from '../tourist-attraction.service';

@Component({
  selector: 'tg-grid-list',
  templateUrl: './grid-list.component.html',
})
export class GridListComponent implements OnInit {

  public constructor(
    private touristAttractionService: TouristAttractionService,
  ) { }

  public ngOnInit(): void {
    this.touristAttractionService.getTouristAttractions().subscribe(
      touristAttractions => console.log(touristAttractions),
    );
  }

}
