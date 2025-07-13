import { Component, inject, input, Input, signal } from '@angular/core';
import { Car } from '../types/car';
import { CarsService } from '../services/cars.service';
import { Estimate } from '../types/estimate';
import { Customer } from '../types/customer';
import { CustomersService } from '../services/customers.service';
import { Phone } from '../types/phone';
import { CustomerCardComponent } from '../components/customer-card/customer-card.component';
import { PhonesCardComponent } from '../components/phones-card/phones-card.component';
import { CarCardComponent } from '../components/car-card/car-card.component';
import { RepairsCardComponent } from '../components/repairs-card/repairs-card.component';
import { EstimatesCardComponent } from '../components/estimates-card/estimates-card.component';

@Component({
  selector: 'app-car',
  imports: [
    CustomerCardComponent,
    PhonesCardComponent,
    CarCardComponent,
    RepairsCardComponent,
    EstimatesCardComponent,
  ],
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
