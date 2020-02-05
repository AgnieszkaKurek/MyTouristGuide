import { TouristAttraction } from './tourist-attraction';
import { TouristAttractionCategory } from './tourist-attraction-category.enum';

export const touristAttractions: TouristAttraction[] = [
  {
    category: TouristAttractionCategory.Castle,
    name: 'Bolkow Castle Museum',
    place: 'Bolkow',
    lastVisited: new Date('2019-07-14')
  },
  {
    category: TouristAttractionCategory.MusicFestival,
    name: 'Castle Party', place: 'Bolkow',
    lastVisited: new Date('2019-07-14')
  },
  {
    category: TouristAttractionCategory.OpenAirMuseum,
    name: 'Center of Slavs and Vikings', place: 'Wolin',
    lastVisited: new Date('2019-08-17')
  },
  {
    category: TouristAttractionCategory.AmusementPark,
    name: 'American Theme Park TWINPIGS',
    place: 'Zory',
    lastVisited: new Date('2017-09-30')
  },
  {
    category: TouristAttractionCategory.HauntedHause,
    name: 'Lost Souls Alley',
    place: 'Cracow',
    lastVisited: new Date('2017-07-02')
  },
  {
    category: TouristAttractionCategory.SportsFacility,
    name: 'National Stadium PGN Narodowy',
    place: 'Warsaw',
    lastVisited: new Date('2019-10-13')
  },
  {
    category: TouristAttractionCategory.Zoo,
    name: 'Zoo Wroclaw Afkarium',
    place: 'Wroclaw',
    lastVisited: new Date('2016-07-06') }
];
