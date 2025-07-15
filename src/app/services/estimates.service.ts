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
export class EstimatesService {
  constructor(private http: HttpClient) {}
  getEstimates(
    filter: string,
    page: number,
    limit: number
  ): Observable<{ estimates: Estimate[]; totals: any }> {
    return this.http.get<{ estimates: Estimate[]; totals: any }>(
      `http://localhost:3001/estimates?filter=${filter}&page=${page}&limit=${limit}`
    );
  }
  getEstimate(id: number): Observable<Estimate> {
    return this.http.get<Estimate>(`http://localhost:3001/estimates/${id}`);
  }
  getEstimateCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(
      `http://localhost:3001/estimates/${id}/customer`
    );
  }
  getEstimateCar(id: number): Observable<Car> {
    return this.http.get<Car>(`http://localhost:3001/estimates/${id}/car`);
  }
  getEstimatePhones(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3001/estimates/${id}/phones`);
  }
  getEstimateLabor(id: number): Observable<Labor[]> {
    return this.http.get<Labor[]>(
      `http://localhost:3001/estimates/${id}/labor`
    );
  }
  getEstimateParts(id: number): Observable<Part[]> {
    return this.http.get<Part[]>(`http://localhost:3001/estimates/${id}/parts`);
  }
  getEstimateOil(id: number): Observable<Part[]> {
    return this.http.get<Part[]>(`http://localhost:3001/estimates/${id}/oil`);
  }
  getEstimateTotals(id: number): Observable<Totals> {
    return this.http.get<Totals>(
      `http://localhost:3001/estimates/${id}/totals`
    );
  }
  addEstimate(estimate: Estimate): Observable<any> {
    return this.http.post<Estimate>(
      'http://localhost:3001/estimates',
      estimate
    );
  }
  updateEstimate(estimate: Estimate): Observable<Estimate> {
    return this.http.put<Estimate>(
      `http://localhost:3001/estimates/${estimate.id}`,
      estimate
    );
  }
  deleteEstimate(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3001/estimates/${id}`);
  }
}
