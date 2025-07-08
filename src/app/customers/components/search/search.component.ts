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
  filter = signal<string>('');
  page = signal<number>(1);
  limit = signal<number>(10);

  ngOnInit() {
    this.customersService
      .getCustomers(this.filter(), this.page(), this.limit())
      .subscribe((data) => {
        this.customers.set(data);
      });
  }

  updateFilter = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.filter.set(input.value);
    this.page.set(1);
    this.customersService
      .getCustomers(this.filter(), this.page(), this.limit())
      .subscribe((data) => {
        this.customers.set(data);
      });
  };
  updatePage = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.page.set(Number(input.value));
    this.customersService
      .getCustomers(this.filter(), this.page(), this.limit())
      .subscribe((data) => {
        this.customers.set(data);
      });
  };
  updateLimit = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.limit.set(Number(input.value));
    this.page.set(1);
    this.customersService
      .getCustomers(this.filter(), this.page(), this.limit())
      .subscribe((data) => {
        this.customers.set(data);
      });
  };
}
