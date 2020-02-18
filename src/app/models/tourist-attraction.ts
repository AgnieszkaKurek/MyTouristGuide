import { TouristAttractionCategory } from './tourist-attraction-category.enum';

export interface TouristAttraction {
  category: TouristAttractionCategory;
  name: string;
  place: string;
  lastVisited: Date;
}
