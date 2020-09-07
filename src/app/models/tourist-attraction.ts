import { TouristAttractionCategory } from './tourist-attraction-category.enum';
import { TouristAttractionAddress } from './tourist-attraction-address';

export interface TouristAttraction {
  id: number;
  category: TouristAttractionCategory;
  name: string;
  description: string;
  imageUrl: string;
  website: string;
  place: string;
  address: TouristAttractionAddress;
  lastVisited: Date;
}
