import { Component, inject, input, signal } from '@angular/core';
import { Customer } from '../types/customer';
import { CustomersService } from '../services/customers.service';
import { JsonPipe } from '@angular/common';
import { Phone } from '../types/phone';
import { Car } from '../types/car';
import { Router } from '@angular/router';
import { PhonesCardComponent } from '../components/phones-card/phones-card.component';
import { CustomerCardComponent } from '../components/customer-card/customer-card.component';
import { CarsCardComponent } from '../components/cars-card/cars-card.component';

@Component({
  selector: 'app-customer',
  imports: [PhonesCardComponent, CustomerCardComponent, CarsCardComponent],
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
    console.log('phones from customer:', this.phones());
  }
  deleteCustomer(id: number): void {
    if (!confirm('Are you sure you want to delete this customer?')) {
      return;
    }
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.router.navigate(['/customers']);
    });
  }
  addPhone(): void {
    this.router.navigate([`/customers/${this.customer()?.id}/add-phone`]);
  }
  addCar(): void {
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
