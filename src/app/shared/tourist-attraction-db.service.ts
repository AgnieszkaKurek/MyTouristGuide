import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { TouristAttractionCategory } from '../shared/models/tourist-attraction-category.enum';
import { TouristAttraction } from '../shared/models/tourist-attraction';

@Injectable({
  providedIn: 'root',
})
export class TouristAttractionDb implements InMemoryDbService {

  public createDb(): any {
    return {
      touristAttractions: this._getTouristAttractions(),
    };
  }

  private _getTouristAttractions(): TouristAttraction[] {
    return [
      {
        id: 1,
        category: TouristAttractionCategory.Castle,
        name: 'Bolkow Castle Museum',
        description: 'Located in Bolków on the Castle Hill, whose slope ends with a sharp cliff from the side of the Nysa Szalona River, and a gentle eastern slope covers the town.',
        place: 'Bolkow',
        imageUrl: '1_bolkow_castle',
        website: 'http://www.zamek-bolkow.info.pl/',
        address: {
          city: 'Bolkow',
          street: 'Zamkowa 1',
          zipCode: '59-420',
          voivodeship: 'Lower Silesia',
        },
        mapLocalization: 'https://tinyurl.com/y2kg5vyt',
        lastVisited: new Date('07/14/2019'),
      },
      {
        id: 2,
        category: TouristAttractionCategory.MusicFestival,
        name: 'Castle Party',
        description: 'One of the largest gothic rock music festivals in Europe, held at the turn of July and August at Bolków Castle.',
        imageUrl: '2_castle_party',
        website: 'http://www.zamek-bolkow.info.pl/',
        place: 'Bolkow',
        address: {
          city: 'Bolkow',
          street: 'Zamkowa 1',
          zipCode: '59-420',
          voivodeship: 'Lower Silesia',
        },
        mapLocalization: 'https://tinyurl.com/y2kg5vyt',
        lastVisited: new Date('07/14/2019'),
      },
      {
        id: 3,
        category: TouristAttractionCategory.OpenAirMuseum,
        name: 'Center of Slavs and Vikings',
        description: 'The open-air museum is situated on the quay of the Dziwna River. There are a dozen or so objects here - replicas of early medieval Wolin.',
        imageUrl: '3_slavs_and_vikings_center',
        website: 'https://jomsborg-vineta.com/',
        place: 'Wolin',
        address: {
          city: 'Wolin',
          street: 'Reclaw 37',
          zipCode: '72-510',
          voivodeship: 'West Pomeranian',
        },
        mapLocalization: 'https://tinyurl.com/y4hv3aof',
        lastVisited: new Date('08/17/2019'),
      },
      {
        id: 4,
        category: TouristAttractionCategory.AmusementPark,
        name: 'American Theme Park TWINPIGS',
        description: 'The first amusement park in Poland that draws handfuls from American classics. The towns were divided into thematic zones referring to history and culture from overseas.',
        imageUrl: '4_twinpigs',
        website: 'https://twinpigs.zory.pl/',
        place: 'Zory',
        address: {
          city: 'Zory',
          street: 'Katowicka 24',
          zipCode: '44-240',
          voivodeship: 'Silesian',
        },
        mapLocalization: 'https://tinyurl.com/yy6pp8rc',
        lastVisited: new Date('09/30/2017'),
      },
      {
        id: 5,
        category: TouristAttractionCategory.HauntedHause,
        name: 'Lost Souls Alley',
        description: 'Lost Souls Alley is the first in Poland, established in 2013, interactive fear house with elements of an escape room.',
        imageUrl: '5_lost_soul_alley',
        website: 'https://lostsoulsalley.pl/',
        place: 'Cracow',
        address: {
          city: 'Craco',
          street: 'Floriańska 6',
          zipCode: '31-021',
          voivodeship: 'Lesser Poland',
        },
        mapLocalization: 'https://tinyurl.com/y3cevtye',
        lastVisited: new Date('07/02/2017'),
      },
      {
        id: 6,
        category: TouristAttractionCategory.SportFacility,
        name: 'National Stadium PGN Narodowy',
        description: 'The National Stadium in Warsaw, from July 2015 under the name PGE Narodowy - a multifunctional sports stadium located in Warsaw. It was built on the site of the 10th Anniversary Stadium before the 2012 European Football Championship.',
        imageUrl: '6_national_stadium',
        website: '/https://www.pgenarodowy.pl/',
        place: 'Warsaw',
        address: {
          city: 'Warsaw',
          street: 'Ksiecia Jozefa Poniatowskiego 1',
          zipCode: '03-901',
          voivodeship: 'Masovian ',
        },
        mapLocalization: 'https://tinyurl.com/y4n75pmz',
        lastVisited: new Date('10/13/2019'),
      },
      {
        id: 7,
        category: TouristAttractionCategory.Zoo,
        name: 'Zoo Wroclaw Afrykarium',
        description: 'The fastest growing zoo in Poland! In 2014, a unique global oceanarium was established here, presenting animals from one continent - Africa.',
        imageUrl: '7_wroclaw_zoo',
        website: 'http://zoo.wroclaw.pl/',
        place: 'Wroclaw',
        address: {
          city: 'Wroclaw',
          street: 'Wroblewskiego 1-5',
          zipCode: '51-618',
          voivodeship: 'Lower Silesia',
        },
        mapLocalization: 'https://tinyurl.com/yxdrp4u5',
        lastVisited: new Date('07/06/2016'),
      },
    ];
  }
}
