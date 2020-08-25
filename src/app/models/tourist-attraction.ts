import { TouristAttractionCategory } from './tourist-attraction-category.enum';
import { TouristAttractionAddress } from './tourist-attraction-address';

export interface TouristAttraction {
  category: TouristAttractionCategory;
  name: string;
  website: string;
  place: string;
  address: TouristAttractionAddress;
  voivodeship: string;
  euroregion: string;
  lastVisited: Date;
}
