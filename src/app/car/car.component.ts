import { Component, inject, input, Input, signal } from '@angular/core';
import { Car } from '../types/car';
import { CarsService } from '../services/cars.service';
import { Estimate } from '../types/estimate';
import { JsonPipe } from '@angular/common';
import { Customer } from '../types/customer';
import { CustomersService } from '../services/customers.service';
import { Phone } from '../types/phone';

@Component({
  selector: 'app-car',
  imports: [JsonPipe],
  providers: [CarsService, CustomersService],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  id = input.required<string>();
  customerId: number = 0;
  carService = inject(CarsService);
  customerService = inject(CustomersService);
  car = signal<Car | null>(null);
  customer = signal<Customer | null>(null);
  phones = signal<Phone[]>([]);
  estimates = signal<Estimate[]>([]);
  repairs = signal<Estimate[]>([]);
  ngOnInit() {
    const idNum = Number(this.id());
    this.carService.getCar(idNum).subscribe((data) => {
      this.car.set(data);
    });
    this.carService.getCarCustomer(idNum).subscribe((data) => {
      this.customer.set(data);
    });
    this.customerId = Number(this.customer()?.id);
    console.log('customer id', this.customerId);
    this.customerService
      .getCustomerPhones(Number(this.customerId))
      .subscribe((data) => {
        this.phones.set(data);
      });
    this.carService.getCarEstimates(idNum).subscribe((data) => {
      this.estimates.set(data);
    });
    this.carService.getCarRepairs(idNum).subscribe((data) => {
      this.repairs.set(data);
    });
    console.log(
      'car',
      this.car(),
      'customer',
      this.customer(),
      'estimates',
      this.estimates(),
      'repairs',
      this.repairs(),
      'phones',
      this.phones()
    );
  }
}
