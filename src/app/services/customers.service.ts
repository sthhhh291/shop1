import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../types/customer';
import { Phone } from '../types/phone';
import { Car } from '../types/car';

@Injectable()
export class CustomersService {
  constructor(private http: HttpClient) {}
  getCustomers(
    filter: string,
    page: number,
    limit: number
  ): Observable<{ customers: Customer[]; totals: any }> {
    return this.http.get<{ customers: Customer[]; totals: any }>(
      `http://localhost:3001/customers?filter=${filter}&page=${page}&limit=${limit}`
    );
  }
  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:3001/customers/${id}`);
  }
  getCustomerPhones(id: number): Observable<Phone[]> {
    return this.http.get<Phone[]>(
      `http://localhost:3001/customers/${id}/phones`
    );
  }
  getCustomerCars(id: number): Observable<Car[]> {
    return this.http.get<Car[]>(`http://localhost:3001/customers/${id}/cars`);
  }
  addCustomer(customer: Customer): Observable<any> {
    return this.http.post<Customer>(
      'http://localhost:3001/customers',
      customer
    );
  }
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(
      `http://localhost:3001/customers/${customer.id}`,
      customer
    );
  }
  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3001/customers/${id}`);
  }
}
