import { RatingRepresentation } from './ration-representation';

export interface ProductRepresentation {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  image?: string;
  price?: number;
  rating?: RatingRepresentation;
}
