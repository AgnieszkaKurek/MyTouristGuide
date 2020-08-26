import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tg-tourist-attraction-detail',
  templateUrl: './tourist-attraction-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TouristAttractionDetailComponent {
   public title: string = 'it work!!!';
}
