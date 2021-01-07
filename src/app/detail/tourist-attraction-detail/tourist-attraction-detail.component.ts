import { ListHistorySettingService } from './../../shared/list-history-setting.service';
import { TouristAttraction } from './../../shared/models/tourist-attraction';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TouristAttractionService } from '../../shared/tourist-attraction.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tg-tourist-attraction-detail',
  templateUrl: './tourist-attraction-detail.component.html',
  styleUrls: ['./tourist-attraction-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TouristAttractionDetailComponent implements OnInit {

  public touristAttraction$: Observable<TouristAttraction>;

  public constructor(
    private _listHistorySettingService: ListHistorySettingService,
    private _touristAttractionService: TouristAttractionService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  public ngOnInit(): void {
    const id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.touristAttraction$ = this._touristAttractionService.getTouristAttractionById$(id);
  }

  public backToTheList(): void {
    this._router.navigate([this._listHistorySettingService.backToListUrl]);
  }
}
