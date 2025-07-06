import { Component, inject, signal } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { Customer } from '../../../customer';
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
  filter = signal('');
  page = signal(1);
  limit = signal(30);
  isAddCustomer = signal(false);
  customers = signal<{ totals: any; customers: Customer[] }>({
    totals: {},
    customers: [],
  });
  updateFilter(event: any) {
    this.filter.set(event.target.value);
    this.page.set(1);
    console.log('filter', this.filter);
    this.router.navigate([], {
      queryParams: { filter: this.filter, page: this.page },
      queryParamsHandling: 'merge', // Preserve other query parameters
    });
  }
  updatePage(event: any) {
    this.page.set(event.target.value);
    this.router.navigate([], {
      queryParams: { page: this.page },
      queryParamsHandling: 'merge',
    });
  }
  updateLimit(event: any) {
    this.limit.set(event.target.value);
    this.page.set(1); // Reset to first page when limit changes
    this.router.navigate([], {
      queryParams: { limit: this.limit, page: this.page },
      queryParamsHandling: 'merge',
    });
  }
}
