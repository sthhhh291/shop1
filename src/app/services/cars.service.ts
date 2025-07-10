import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../types/car';
import { Estimate } from '../types/estimate';
import { Customer } from '../types/customer';

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {}
  getCars(
    filter: string,
    page: number,
    limit: number
  ): Observable<{ cars: Car[]; totals: any }> {
    return this.http.get<{ cars: Car[]; totals: any }>(
      `http://localhost:3001/cars?filter=${filter}&page=${page}&limit=${limit}`
    );
  }
  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(`http://localhost:3001/cars/${id}`);
  }
  getCarCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:3001/cars/${id}/customer`);
  }
  getCarEstimates(id: number): Observable<Estimate[]> {
    return this.http.get<Estimate[]>(
      `http://localhost:3001/cars/${id}/estimates`
    );
  }
  getCarRepairs(id: number): Observable<Estimate[]> {
    return this.http.get<Estimate[]>(
      `http://localhost:3001/cars/${id}/repair_orders`
    );
  }
  addCar(car: Car): Observable<any> {
    return this.http.post<Car>('http://localhost:3001/cars', car);
  }
  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`http://localhost:3001/cars/${car.id}`, car);
  }
  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3001/cars/${id}`);
  }
}
