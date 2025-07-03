import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable()
export class CustomersService {
  constructor(private http: HttpClient) {}
  getCustomers(
    filter: string,
    page: number,
    limit: number
  ): Observable<{ customers: Customer[]; totals: any }> {
    return this.http.get<{ customers: Customer[]; totals: any }>(
      `http://192.168.1.7:3001/customers?filter=${filter}&page=${page}&limit=${limit}`
    );
  }
  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://192.168.1.7:3001/customers/${id}`);
  }
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      'http://192.168.1.7:3001/customers',
      customer
    );
  }
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(
      `http://192.168.1.7:3001/customers/${customer.id}`,
      customer
    );
  }
  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`http://192.168.1.7:3001/customers/${id}`);
  }
}
