import { Car } from './car';
import { Phone } from './phone';

export interface Customer {
  id: number;
  first_name: string;
  last_name: string;
  notes: string;
  phones?: Phone[];
  cars?: Car[];
}
