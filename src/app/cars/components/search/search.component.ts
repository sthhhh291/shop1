import { Component, inject, Input, signal } from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
// import { Router } from '@angular/router';
import { Car } from '../../../types/car';
import { JsonPipe } from '@angular/common';
import { Customer } from '../../../types/customer';

@Component({
  selector: 'app-search',
  imports: [JsonPipe, RouterModule],
  providers: [CarsService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  carsService = inject(CarsService);
  car = signal<string>('');
  customer = signal<string>('');
  limit = signal<number>(10);
  page = signal<number>(1);
  cars = signal<{ totals: any; cars: (Car & Customer)[] }>({
    totals: {},
    cars: [],
  });
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      // console.log('params:', params);
      if (params['car']) {
        this.car.set(params['car']);
      }
      if (params['customer']) {
        this.customer.set(params['customer']);
      }
      if (params['page']) {
        this.page.set(Number(params['page']));
      }
      if (params['limit']) {
        this.limit.set(Number(params['limit']));
      }
    });
    console.log(
      'car:',
      this.car(),
      'customer:',
      this.customer(),
      'page:',
      this.page(),
      'limit:',
      this.limit()
    );
    this.carsService
      .getCars(this.car(), this.customer(), this.page(), this.limit())
      .subscribe((data) => {
        console.log('cars:', data);
        this.cars.set(data);
      });
  }
  updateCustomer(event: any) {
    this.customer.set(event.target.value);
    this.router.navigate([], {
      queryParams: { customer: this.customer(), page: 1 },
      queryParamsHandling: 'merge',
    });
    this.carsService
      .getCars(this.car(), this.customer(), this.page(), this.limit())
      .subscribe((data) => {
        console.log('cars:', data);
        this.cars.set(data);
      });
  }
  updateCar(event: any) {
    this.car.set(event.target.value);
    this.router.navigate([], {
      queryParams: { car: this.car(), page: 1 },
      queryParamsHandling: 'merge',
    });
    this.carsService
      .getCars(this.car(), this.customer(), this.page(), this.limit())
      .subscribe((data) => {
        console.log('cars:', data);
        this.cars.set(data);
      });
  }
  updateLimit(event: any) {
    this.limit.set(event.target.value);
    this.router.navigate([], {
      queryParams: { limit: this.limit(), page: 1 },
      queryParamsHandling: 'merge',
    });
    this.carsService
      .getCars(this.car(), this.customer(), this.page(), this.limit())
      .subscribe((data) => {
        console.log('cars:', data);
        this.cars.set(data);
      });
  }
  updatePage(event: any) {
    this.page.set(event.target.value);
    this.router.navigate([], {
      queryParams: { page: this.page() },
      queryParamsHandling: 'merge',
    });
    this.carsService
      .getCars(this.car(), this.customer(), this.page(), this.limit())
      .subscribe((data) => {
        console.log('cars:', data);
        this.cars.set(data);
      });
  }
}
