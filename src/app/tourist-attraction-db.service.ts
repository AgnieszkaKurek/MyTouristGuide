import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { TouristAttractionCategory } from './models/tourist-attraction-category.enum';
import { TouristAttraction } from './models/tourist-attraction';

@Injectable({
  providedIn: 'root',
})
export class TouristAttractionDb implements InMemoryDbService {

  public createDb(): any {
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
        website: 'http://www.zamek-bolkow.info.pl/',
        address: {
          street: 'Zamkowa 1',
          zipCode: '59-420',
        },
        voivodeship: 'Lower Silesia',
        euroregion: 'Neisse-Nisa-Nysa',
        lastVisited: new Date('07/14/2019'),
      },
      {
        category: TouristAttractionCategory.MusicFestival,
        name: 'Castle Party',
        website: 'http://www.zamek-bolkow.info.pl/',
        place: 'Bolkow',
        address: {
          street: 'Zamkowa 1',
          zipCode: '59-420',
        },
        voivodeship: 'Lower Silesia',
        euroregion: 'Neisse-Nisa-Nysa',
        lastVisited: new Date('07/14/2019'),
      },
      {
        category: TouristAttractionCategory.OpenAirMuseum,
        name: 'Center of Slavs and Vikings',
        website: 'https://jomsborg-vineta.com/',
        place: 'Wolin',
        address: {
          street: 'Reclaw 37',
          zipCode: '72-510',
        },
        voivodeship: 'West Pomeranian',
        euroregion: 'Pomerania',
        lastVisited: new Date('08/17/2019'),
      },
      {
        category: TouristAttractionCategory.AmusementPark,
        name: 'American Theme Park TWINPIGS',
        website: 'https://twinpigs.zory.pl/',
        place: 'Zory',
        address: {
          street: 'Katowicka 24',
          zipCode: '44-240',
        },
        voivodeship: 'Silesian',
        euroregion: 'Silesia',
        lastVisited: new Date('09/30/2017'),
      },
      {
        category: TouristAttractionCategory.HauntedHause,
        name: 'Lost Souls Alley',
        website: 'https://lostsoulsalley.pl/',
        place: 'Cracow',
        address: {
          street: 'Floriańska 6',
          zipCode: '31-021',
        },
        voivodeship: 'Lesser Poland',
        euroregion: 'Glacenisis',
        lastVisited: new Date('07/02/2017'),
      },
      {
        category: TouristAttractionCategory.SportFacility,
        name: 'National Stadium PGN Narodowy',
        website: 'https://www.pgenarodowy.pl/',
        place: 'Warsaw',
        address: {
          street: 'Ksiecia Jozefa Poniatowskiego 1',
          zipCode: '03-901',
        },
        voivodeship: 'Masovian ',
        euroregion: '',
        lastVisited: new Date('10/13/2019'),
      },
      {
        category: TouristAttractionCategory.Zoo,
        name: 'Zoo Wroclaw Afrykarium',
        website: 'http://zoo.wroclaw.pl/',
        place: 'Wroclaw',
        address: {
          street: 'Wroblewskiego 1-5',
          zipCode: '51-618',
        },
        voivodeship: 'Lower Silesia',
        euroregion: 'Neisse-Nisa-Nysa',
        lastVisited: new Date('07/06/2016'),
      },
    ];
  }
}
