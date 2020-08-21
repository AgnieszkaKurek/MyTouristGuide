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

  public getTouristAttractions(setting: TouristAttractionListSetting): Observable<TouristAttractionsListInfo> {
    return this.http.get<TouristAttraction[]>(this.touristAttractionsUrl).pipe(
      shareReplay(),
      map((data: TouristAttraction[]) => this.filterAndPaginate(data, setting)),
    );
  }

  private filterAndPaginate(items: TouristAttraction[], setting: TouristAttractionListSetting): TouristAttractionsListInfo {
    const touristAttractionsListInfo: TouristAttractionsListInfo = {
      lengthAfterFiltering: items.length,
      attractions: items,
    };
    touristAttractionsListInfo.attractions = this.filter(items, setting.filter);
    touristAttractionsListInfo.lengthAfterFiltering = touristAttractionsListInfo.attractions.length;
    touristAttractionsListInfo.attractions = this.paginate(touristAttractionsListInfo.attractions, setting.pageSize);
    return touristAttractionsListInfo;
  }

  private filter(data: TouristAttraction[], filter: string): TouristAttraction[] {
    return data.filter(attraction => [
      attraction.category,
      attraction.name,
      attraction.place,
    ].some(field => field.toLocaleLowerCase().includes(filter)));
  }

  private paginate(data: TouristAttraction[], pageSize: number): TouristAttraction[] {
    return data.slice(0, pageSize);
  }
}
