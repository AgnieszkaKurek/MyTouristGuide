import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouristAttraction } from './shared/models/tourist-attraction';
import { TouristAttractionListSetting } from './tourist-attraction-list-setting.service';
import { shareReplay, map } from 'rxjs/operators';
import { TouristAttractionsListInfo } from './shared/models/tourist-attractions-list-info';

@Injectable({
  providedIn: 'root',
})
export class TouristAttractionService {

  private touristAttractionsUrl: string = 'api/touristAttractions';
  private cache: Observable<TouristAttraction[]>;

  public constructor(
    private http: HttpClient,
  ) {
  }

  public getTouristAttractions$(setting: TouristAttractionListSetting): Observable<TouristAttractionsListInfo> {
    return this.touristAttractions$.pipe(
      map((items: TouristAttraction[]) => this.filterAndPaginate(items, setting)),
    );
  }

  public getTouristAttractionById$(id: number): Observable<TouristAttraction> {
    return this.touristAttractions$.pipe(
      map(list => list.find(x => x.id === id)),
    );
  }

  private get touristAttractions$(): Observable<TouristAttraction[]> {
    if (!this.cache) {
      this.cache = this.http.get<TouristAttraction[]>(this.touristAttractionsUrl).pipe(
        map((items: TouristAttraction[]) => this.enrichImageUrl(items)),
        shareReplay(),
      );
    }
    return this.cache;
  }

  private enrichImageUrl(items: TouristAttraction[]): TouristAttraction[] {
    return items.map(item =>
      ({
        ...item,
        imageUrl: `assets/images/${item.imageUrl}.jpg`,
      })
    );
  }

  private filterAndPaginate(items: TouristAttraction[], setting: TouristAttractionListSetting): TouristAttractionsListInfo {
    const filteredItems = this.filter(items, setting.filter);
    return {
      lengthAfterFiltering: filteredItems.length,
      currentPageAttractions: this.getPageAttractions(filteredItems, setting.pageSize, setting.pageNumber),
    };
  }

  private filter(data: TouristAttraction[], filter: string): TouristAttraction[] {
    return data.filter(attraction => [
      attraction.category,
      attraction.name,
      attraction.place,
    ].some(field => field.toLocaleLowerCase().includes(filter)));
  }

  private getPageAttractions(data: TouristAttraction[], pageSize: number, pageNumber: number): TouristAttraction[] {
    const fromIndex = pageSize * pageNumber;
    const toIndex = pageSize * (pageNumber + 1);
    return data.slice(fromIndex, toIndex);
  }
}
