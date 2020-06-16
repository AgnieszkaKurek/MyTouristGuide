import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TouristAttractionListSetting {
  filter: string;
}

@Injectable({
  providedIn: 'root',
})
export class TouristAttractionListSettingService {

  private _setting: TouristAttractionListSetting = {
    filter: '',
  }
  private _settingsChangedSource: BehaviorSubject<TouristAttractionListSetting> =
    new BehaviorSubject<TouristAttractionListSetting>(this._setting);

  public settingsChanged: Observable<TouristAttractionListSetting> = this._settingsChangedSource.asObservable();

  public set filter(filter: string) {
    this._setting = {
      ...this._setting,
      filter: filter.toLocaleLowerCase(),
    };
    this._settingsChangedSource.next(this._setting);
  };

}
