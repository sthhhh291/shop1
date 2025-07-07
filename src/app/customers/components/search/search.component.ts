import { Component, inject, signal } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { Customer } from '../../../customer';
import { JsonPipe } from '@angular/common';
import {
  Router,
  RouterModule,
  withComponentInputBinding,
} from '@angular/router';

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
  filter = withComponentInputBinding();
  page = withComponentInputBinding();
  limit = withComponentInputBinding();
  customers = signal<{ totals: any; customers: Customer[] }>({
    totals: {},
    customers: [],
  });
  updateFilter(event: any) {
    this.filter.(event.target.value);
    this.page.set(1);
    console.log('filter', this.filter());
    this.customersService
      .getCustomers(this.filter(), this.page(), this.limit())
      .subscribe((customers) => {
        this.customers.set(customers);
      });
    this.router.navigate([], {
      queryParams: { filter: this.filter(), page: this.page() },
      queryParamsHandling: 'merge',
    });
  }
  updatePage(event: any) {
    this.page.set(event.target.value);
    this.router.navigate([], {
      queryParams: { page: this.page() },
      queryParamsHandling: 'merge',
    });
  }
  updateLimit(event: any) {
    this.limit.set(event.target.value);
    this.page.set(1);
    this.router.navigate([], {
      queryParams: { limit: this.limit(), page: this.page() },
      queryParamsHandling: 'merge',
    });
  }
}
