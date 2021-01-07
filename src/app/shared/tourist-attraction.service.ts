import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouristAttraction } from './models/tourist-attraction';
import { TouristAttractionListSetting } from './tourist-attraction-list-setting.service';
import { shareReplay, map } from 'rxjs/operators';
import { TouristAttractionsListInfo } from './models/tourist-attractions-list-info';

@Injectable({
  providedIn: 'root',
})
export class TouristAttractionService {

  private _touristAttractionsUrl: string = 'api/touristAttractions';
  private _cache: Observable<TouristAttraction[]>;

  public constructor(
    private _http: HttpClient,
  ) {
  }

  public getTouristAttractions$(setting: TouristAttractionListSetting): Observable<TouristAttractionsListInfo> {
    return this._touristAttractions$.pipe(
      map((items: TouristAttraction[]) => this._filterAndPaginate(items, setting)),
    );
  }

  public getTouristAttractionById$(id: number): Observable<TouristAttraction> {
    return this._touristAttractions$.pipe(
      map(list => list.find(x => x.id === id)),
    );
  }

  private get _touristAttractions$(): Observable<TouristAttraction[]> {
    if (!this._cache) {
      this._cache = this._http.get<TouristAttraction[]>(this._touristAttractionsUrl).pipe(
        map((items: TouristAttraction[]) => this._enrichImageUrl(items)),
        shareReplay(),
      );
    }
    return this._cache;
  }

  private _enrichImageUrl(items: TouristAttraction[]): TouristAttraction[] {
    return items.map(item =>
    ({
      ...item,
      imageUrl: `assets/images/${item.imageUrl}.jpg`,
    })
    );
  }

  private _filterAndPaginate(items: TouristAttraction[], setting: TouristAttractionListSetting): TouristAttractionsListInfo {
    const filteredItems = this._filter(items, setting.filter);
    return {
      lengthAfterFiltering: filteredItems.length,
      currentPageAttractions: this._getPageAttractions(filteredItems, setting.pageSize, setting.pageNumber),
    };
  }

  private _filter(data: TouristAttraction[], filter: string): TouristAttraction[] {
    return data.filter(attraction => [
      attraction.category,
      attraction.name,
      attraction.place,
    ].some(field => field?.toLocaleLowerCase().includes(filter)));
  }

  private _getPageAttractions(data: TouristAttraction[], pageSize: number, pageNumber: number): TouristAttraction[] {
    const fromIndex = pageSize * pageNumber;
    const toIndex = pageSize * (pageNumber + 1);
    return data.slice(fromIndex, toIndex);
  }

  public _add(attraction: TouristAttraction): Observable<TouristAttraction> {
    this._cache = undefined;
    return this._http.post<TouristAttraction>(this._touristAttractionsUrl, attraction);
  }
}
