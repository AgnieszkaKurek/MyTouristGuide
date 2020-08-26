import { TouristAttraction } from './../models/tourist-attraction';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TouristAttractionService } from '../tourist-attraction.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tg-tourist-attraction-detail',
  templateUrl: './tourist-attraction-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TouristAttractionDetailComponent implements OnInit {

  public touristAttraction$: Observable<TouristAttraction>;

  public constructor(
    private touristAttractionService: TouristAttractionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.touristAttraction$ = this.touristAttractionService.getTouristAttractionById$(id);
  }

  public backToTheList(): void {
    this.router.navigate(['attractions/list']);
  }
}
