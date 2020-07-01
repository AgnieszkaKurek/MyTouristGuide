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

  private setting: TouristAttractionListSetting = {
    filter: '',
    pageSize: 10,
    pageNumber: 0,
  };
  private settingsChangedSource: BehaviorSubject<TouristAttractionListSetting> =
    new BehaviorSubject<TouristAttractionListSetting>(this.setting);

  public settingsChanged: Observable<TouristAttractionListSetting> = this.settingsChangedSource.asObservable();

  public set filter(filter: string) {
    this.setting = {
      ...this.setting,
      pageNumber: 1,
      filter: filter.toLocaleLowerCase(),
    };
    this.settingsChangedSource.next(this.setting);
  }

  public setPageSettings(pageSize: number, pageNumber: number): void {
    this.setting = {
      ...this.setting,
      pageSize,
      pageNumber,
    };
    this.settingsChangedSource.next(this.setting);
  }

}
