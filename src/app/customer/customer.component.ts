import { Component, inject, signal } from '@angular/core';
import { Customer } from '../types/customer';
import { CustomersService } from '../services/customers.service';
import { JsonPipe } from '@angular/common';
import { Phone } from '../types/phone';
import { Car } from '../types/car';

@Component({
  selector: 'app-customer',
  imports: [JsonPipe],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  customerService = inject(CustomersService);
  customer = signal<Customer | null>(null);
  phones = signal<Phone[]>([]);
  cars = signal<Car[]>([]);
  id = signal<number>(1);
  ngOnInit() {
    const url = new URL(window.location.href);
    const id = url.pathname.split('/').pop();
    if (id) {
      this.id.set(Number(id));
      this.customerService.getCustomer(this.id()).subscribe((data) => {
        this.customer.set(data);
      });
      this.customerService.getCustomerPhones(this.id()).subscribe((data) => {
        this.phones.set(data);
      });
      this.customerService.getCustomerCars(this.id()).subscribe((data) => {
        this.cars.set(data);
      });
    }
  }
}
