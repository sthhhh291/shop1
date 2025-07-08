import { Component, inject, input, signal } from '@angular/core';
import { Customer } from '../types/customer';
import { CustomersService } from '../services/customers.service';
import { JsonPipe } from '@angular/common';
import { Phone } from '../types/phone';
import { Car } from '../types/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [JsonPipe],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  customerService = inject(CustomersService);
  router: Router = inject(Router);
  customer = signal<Customer | null>(null);
  phones = signal<Phone[]>([]);
  cars = signal<Car[]>([]);
  id = input.required<string>();

  ngOnInit() {
    const idNum = Number(this.id());
    this.customerService.getCustomer(idNum).subscribe((data) => {
      this.customer.set(data);
    });
    this.customerService.getCustomerPhones(idNum).subscribe((data) => {
      this.phones.set(data);
    });
    this.customerService.getCustomerCars(idNum).subscribe((data) => {
      this.cars.set(data);
    });
  }
  deleteCustomer(id: number): void {
    if (!confirm('Are you sure you want to delete this customer?')) {
      return;
    }
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.router.navigate(['/customers']);
    });
  }
  addPhone(id: number): void {
    const newPhone: Phone = {
      id: 0,
      customer_id: this.customer()?.id || 0,
      phone_number: '',
      phone_type: '',
    };
    this.phones.update((phones) => [...phones, newPhone]);
  }
  addCar(id: number): void {
    const newCar: Car = {
      id: 0,
      customer_id: this.customer()?.id || 0,
      make: '',
      model: '',
      year: '',
    };
    this.cars.update((cars) => [...cars, newCar]);
  }
  editCustomer(): void {
    if (this.customer()) {
      this.router.navigate([`/customers/${this.customer()?.id}/edit`]);
    }
  }
}
