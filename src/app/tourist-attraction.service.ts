import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouristAttraction } from './models/tourist-attraction';
import { TouristAttractionListSetting } from './tourist-attraction-list-setting.service';
import { shareReplay, map, tap } from 'rxjs/operators';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root',
})
export class TouristAttractionService {

  private touristAttractionsUrl: string = 'api/touristAttractions';

  public constructor(
    private http: HttpClient,
  ) {
  }

  public getTouristAttractions(setting: TouristAttractionListSetting): Observable<TouristAttraction[]> {
    return this.http.get<TouristAttraction[]>(this.touristAttractionsUrl).pipe(
      shareReplay(),
      map((data: TouristAttraction[]) => this.filter(data, setting.filter)),
      map((data: TouristAttraction[]) => this.paginate(data, setting.pageSize)),
    );
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
