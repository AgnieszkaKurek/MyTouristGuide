import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { TouristAttractionCategory } from './models/tourist-attraction-category.enum';
import { TouristAttraction } from './models/tourist-attraction';

@Injectable({
  providedIn: 'root',
})
export class TouristAttractionDb implements InMemoryDbService {

  public createDb() {
    return {
      touristAttractions: this.getTouristAttractions(),
    };
  }

  private getTouristAttractions(): TouristAttraction[] {
    return [
      {
        category: TouristAttractionCategory.Castle,
        name: 'Bolkow Castle Museum',
        place: 'Bolkow',
        lastVisited: new Date('2019-07-14'),
      },
      {
        category: TouristAttractionCategory.MusicFestival,
        name: 'Castle Party',
        place: 'Bolkow',
        lastVisited: new Date('2019-07-14'),
      },
      {
        category: TouristAttractionCategory.OpenAirMuseum,
        name: 'Center of Slavs and Vikings',
        place: 'Wolin',
        lastVisited: new Date('2019-08-17'),
      },
      {
        category: TouristAttractionCategory.AmusementPark,
        name: 'American Theme Park TWINPIGS',
        place: 'Zory',
        lastVisited: new Date('2017-09-30'),
      },
      {
        category: TouristAttractionCategory.HauntedHause,
        name: 'Lost Souls Alley',
        place: 'Cracow',
        lastVisited: new Date('2017-07-02'),
      },
      {
        category: TouristAttractionCategory.SportFacility,
        name: 'National Stadium PGN Narodowy',
        place: 'Warsaw',
        lastVisited: new Date('2019-10-13'),
      },
      {
        category: TouristAttractionCategory.Zoo,
        name: 'Zoo Wroclaw Afkarium',
        place: 'Wroclaw',
        lastVisited: new Date('2016-07-06'),
      },
    ];
  }
}
