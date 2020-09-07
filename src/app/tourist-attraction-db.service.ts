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
        id: 1,
        category: TouristAttractionCategory.Castle,
        name: 'Bolkow Castle Museum',
        description: 'Located in Bolków on the Castle Hill, whose slope ends with a sharp cliff from the side of the Nysa Szalona River, and a gentle eastern slope covers the town.',
        place: 'Bolkow',
        imageUrl: 'assets/images/1_bolkow_castle.jpg',
        website: 'http://www.zamek-bolkow.info.pl/',
        address: {
          city: 'Bolkow',
          street: 'Zamkowa 1',
          zipCode: '59-420',
          voivodeship: 'Lower Silesia',
        },
        lastVisited: new Date('07/14/2019'),
      },
      {
        id: 2,
        category: TouristAttractionCategory.MusicFestival,
        name: 'Castle Party',
        description: 'One of the largest gothic rock music festivals in Europe, held at the turn of July and August at Bolków Castle.',
        imageUrl: 'assets/images/2_castle_party.jpg',
        website: 'http://www.zamek-bolkow.info.pl/',
        place: 'Bolkow',
        address: {
          city: 'Bolkow',
          street: 'Zamkowa 1',
          zipCode: '59-420',
          voivodeship: 'Lower Silesia',
        },
        lastVisited: new Date('07/14/2019'),
      },
      {
        id: 3,
        category: TouristAttractionCategory.OpenAirMuseum,
        name: 'Center of Slavs and Vikings',
        description: 'The open-air museum is situated on the quay of the Dziwna River. There are a dozen or so objects here - replicas of early medieval Wolin.',
        imageUrl: 'assets/images/3_slavs_and_vikings_center.jpg',
        website: 'https://jomsborg-vineta.com/',
        place: 'Wolin',
        address: {
          city: 'Wolin',
          street: 'Reclaw 37',
          zipCode: '72-510',
          voivodeship: 'West Pomeranian',
        },
        lastVisited: new Date('08/17/2019'),
      },
      {
        id: 4,
        category: TouristAttractionCategory.AmusementPark,
        name: 'American Theme Park TWINPIGS',
        description: 'The first amusement park in Poland that draws handfuls from American classics. The towns were divided into thematic zones referring to history and culture from overseas.',
        imageUrl: 'assets/images/4_twinpigs.jpg',
        website: 'https://twinpigs.zory.pl/',
        place: 'Zory',
        address: {
          city: 'Zory',
          street: 'Katowicka 24',
          zipCode: '44-240',
          voivodeship: 'Silesian',
        },
        lastVisited: new Date('09/30/2017'),
      },
      {
        id: 5,
        category: TouristAttractionCategory.HauntedHause,
        name: 'Lost Souls Alley',
        description: 'Lost Souls Alley is the first in Poland, established in 2013, interactive fear house with elements of an escape room.',
        imageUrl: 'assets/images/5_lost_soul_alley.jpg',
        website: 'https://lostsoulsalley.pl/',
        place: 'Cracow',
        address: {
          city: 'Craco',
          street: 'Floriańska 6',
          zipCode: '31-021',
          voivodeship: 'Lesser Poland',
        },
        lastVisited: new Date('07/02/2017'),
      },
      {
        id: 6,
        category: TouristAttractionCategory.SportFacility,
        name: 'National Stadium PGN Narodowy',
        description: 'The National Stadium in Warsaw, from July 2015 under the name PGE Narodowy - a multifunctional sports stadium located in Warsaw. It was built on the site of the 10th Anniversary Stadium before the 2012 European Football Championship.',
        imageUrl: 'assets/images/6_national_stadium.jpg',
        website: '/https://www.pgenarodowy.pl/',
        place: 'Warsaw',
        address: {
          city: 'Warsaw',
          street: 'Ksiecia Jozefa Poniatowskiego 1',
          zipCode: '03-901',
          voivodeship: 'Masovian ',
        },
        lastVisited: new Date('10/13/2019'),
      },
      {
        id: 7,
        category: TouristAttractionCategory.Zoo,
        name: 'Zoo Wroclaw Afrykarium',
        description: 'The fastest growing zoo in Poland! In 2014, a unique global oceanarium was established here, presenting animals from one continent - Africa.',
        imageUrl: 'assets/images/7_wroclaw_zoo.jpg',
        website: 'http://zoo.wroclaw.pl/',
        place: 'Wroclaw',
        address: {
          city: 'Wroclaw',
          street: 'Wroblewskiego 1-5',
          zipCode: '51-618',
          voivodeship: 'Lower Silesia',
        },
        lastVisited: new Date('07/06/2016'),
      },
    ];
  }
}
