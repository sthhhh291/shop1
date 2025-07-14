export interface Part {
  id: number;
  estimate_id?: number;
  repair_id?: number;
  description: string;
  mfr_no: string;
  part_no: string;
  quantity: number;
  cost: number;
  list: number;
  price: number;
}
