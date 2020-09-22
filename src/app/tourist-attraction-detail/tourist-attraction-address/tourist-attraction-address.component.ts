import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TouristAttractionAddress } from './../../shared/models/tourist-attraction-address';

@Component({
  selector: 'tg-tourist-attraction-address',
  templateUrl: './tourist-attraction-address.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TouristAttractionAddressComponent {

  @Input()
  public address: TouristAttractionAddress;
}
