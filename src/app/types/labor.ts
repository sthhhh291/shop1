export interface Labor {
  id: number;
  estimate_id?: number;
  repair_id?: number;
  description: string;
  hours: number;
  price: number;
}
