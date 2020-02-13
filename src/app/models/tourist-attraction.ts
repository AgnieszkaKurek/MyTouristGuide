import { TouristAttractionCategory } from './tourist-attraction-category.enum';

export class TouristAttraction {
  category: TouristAttractionCategory;
  name: string;
  place: string;
  lastVisited: Date;
}
