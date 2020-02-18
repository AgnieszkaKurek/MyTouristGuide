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
        lastVisited: new Date('07/14/2019'),
      },
      {
        category: TouristAttractionCategory.MusicFestival,
        name: 'Castle Party',
        place: 'Bolkow',
        lastVisited: new Date('07/14/2019'),
      },
      {
        category: TouristAttractionCategory.OpenAirMuseum,
        name: 'Center of Slavs and Vikings',
        place: 'Wolin',
        lastVisited: new Date('08/17/2019'),
      },
      {
        category: TouristAttractionCategory.AmusementPark,
        name: 'American Theme Park TWINPIGS',
        place: 'Zory',
        lastVisited: new Date('09/30/2017'),
      },
      {
        category: TouristAttractionCategory.HauntedHause,
        name: 'Lost Souls Alley',
        place: 'Cracow',
        lastVisited: new Date('07/02/2017'),
      },
      {
        category: TouristAttractionCategory.SportFacility,
        name: 'National Stadium PGN Narodowy',
        place: 'Warsaw',
        lastVisited: new Date('10/13/2019'),
      },
      {
        category: TouristAttractionCategory.Zoo,
        name: 'Zoo Wroclaw Afrykarium',
        place: 'Wroclaw',
        lastVisited: new Date('07/06/2016'),
      },
    ];
  }
}
