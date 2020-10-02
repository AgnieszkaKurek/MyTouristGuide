import { TouristAttraction } from './tourist-attraction';

export interface TouristAttractionsListInfo {
  lengthAfterFiltering: number;
  currentPageAttractions: TouristAttraction[];
}
