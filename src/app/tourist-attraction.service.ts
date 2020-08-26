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

  private touristAttractionsUrl: string = 'api/touristAttractions';

  public constructor(
    private http: HttpClient,
  ) {
  }

  public getTouristAttractions$(setting: TouristAttractionListSetting): Observable<TouristAttractionsListInfo> {
    return this.http.get<TouristAttraction[]>(this.touristAttractionsUrl).pipe(
      shareReplay(),
      map((data: TouristAttraction[]) => this.filterAndPaginate(data, setting)),
    );
  }

  public getTouristAttractionById$(id: number): Observable<TouristAttraction> {
    return this.http.get<TouristAttraction[]>(this.touristAttractionsUrl).pipe(
      map(list => list.find(x => x.id === id)),
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
