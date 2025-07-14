import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../types/car';
import { Estimate } from '../types/estimate';
import { Customer } from '../types/customer';
import { Labor } from '../types/labor';
import { Part } from '../types/part';
import { Totals } from '../types/totals';

@Injectable()
export class RepairsService {
  constructor(private http: HttpClient) {}
  getRepairs(
    filter: string,
    page: number,
    limit: number
  ): Observable<{ repairs: Estimate[]; totals: any }> {
    return this.http.get<{ repairs: Estimate[]; totals: any }>(
      `http://localhost:3001/repair_orders?filter=${filter}&page=${page}&limit=${limit}`
    );
  }
  getRepair(id: number): Observable<Estimate> {
    return this.http.get<Estimate>(`http://localhost:3001/repair_orders/${id}`);
  }
  getRepairLabor(id: number): Observable<Labor[]> {
    return this.http.get<Labor[]>(
      `http://localhost:3001/repair_orders/${id}/labor`
    );
  }
  getRepairParts(id: number): Observable<Part[]> {
    return this.http.get<Part[]>(
      `http://localhost:3001/repair_orders/${id}/parts`
    );
  }
  getRepairOil(id: number): Observable<Part[]> {
    return this.http.get<Part[]>(
      `http://localhost:3001/repair_orders/${id}/oil`
    );
  }
  getRepairTotals(id: number): Observable<Totals> {
    return this.http.get<Totals>(
      `http://localhost:3001/repair_orders/${id}/totals`
    );
  }
  addRepair(repair: Estimate): Observable<any> {
    return this.http.post<Estimate>(
      'http://localhost:3001/repair_orders',
      repair
    );
  }
  updateRepair(repair: Estimate): Observable<Estimate> {
    return this.http.put<Estimate>(
      `http://localhost:3001/repair_orders/${repair.id}`,
      repair
    );
  }
  deleteRepair(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3001/repair_orders/${id}`);
  }
}
