import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TouristAttractionListSetting {
  filter: string;
  pageSize: number;
  pageNumber: number;
}

@Injectable({
  providedIn: 'root',
})
export class TouristAttractionListSettingService {

  private _setting: TouristAttractionListSetting = {
    filter: '',
    pageSize: 10,
    pageNumber: 0,
  }
  private _settingsChangedSource: BehaviorSubject<TouristAttractionListSetting> =
    new BehaviorSubject<TouristAttractionListSetting>(this._setting);

  public settingsChanged: Observable<TouristAttractionListSetting> = this._settingsChangedSource.asObservable();

  public set filter(filter: string) {
    this._setting = {
      ...this._setting,
      pageNumber: 0,
      filter: filter.toLocaleLowerCase(),
    };
    this._settingsChangedSource.next(this._setting);
  };

  public setPageSettings(pageSize: number, pageNumber: number): void {
    this._setting = {
      ...this._setting,
      pageSize,
      pageNumber,
    };
    this._settingsChangedSource.next(this._setting);
  }

}
