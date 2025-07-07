import { Component, Inject, inject, Input, signal } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { Customer } from '../../../types/customer';
import { JsonPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [JsonPipe, RouterModule],
  providers: [CustomersService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  router = inject(Router);
  customersService = inject(CustomersService);
  customers = signal<{ totals: any; customers: Customer[] }>({
    totals: {},
    customers: [],
  });
  filter = '';
  page = 1;
  limit = 10;

  updateFilter = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.filter = input.value;
    this.page = 1;
    this.customersService
      .getCustomers(this.filter, this.page, this.limit)
      .subscribe((data) => {
        this.customers.set(data);
      });
  };
  updatePage = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.page = Number(input.value);
    this.customersService
      .getCustomers(this.filter, this.page, this.limit)
      .subscribe((data) => {
        this.customers.set(data);
      });
  };
  updateLimit = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.limit = Number(input.value);
    this.page = 1;
    this.customersService
      .getCustomers(this.filter, this.page, this.limit)
      .subscribe((data) => {
        this.customers.set(data);
      });
  };
}
