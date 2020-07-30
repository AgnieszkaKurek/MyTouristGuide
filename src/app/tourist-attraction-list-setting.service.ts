import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TouristAttractionListSetting {
  filter: string;
}

@Injectable({
  providedIn: 'root',
})
export class TouristAttractionListSettingService {

  private setting: TouristAttractionListSetting = {
    filter: '',
  };
  private settingsChangedSource: BehaviorSubject<TouristAttractionListSetting> =
    new BehaviorSubject<TouristAttractionListSetting>(this.setting);

  public settingsChanged: Observable<TouristAttractionListSetting> = this.settingsChangedSource.asObservable();

  public set filter(filter: string) {
    this.setting = {
      ...this.setting,
      filter: filter.toLocaleLowerCase(),
    };
    this.settingsChangedSource.next(this.setting);
  }

}
