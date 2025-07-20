import { Component, Inject, inject, Input, signal } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { Customer } from '../../../types/customer';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-customers',
  imports: [JsonPipe, RouterModule, AddCustomerComponent],
  providers: [CustomersService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  customersService = inject(CustomersService);
  customers = signal<{ totals: any; customers: Customer[] }>({
    totals: {},
    customers: [],
  });
  filter = signal<string>('');
  page = signal<number>(1);
  limit = signal<number>(10);
  isAddCustomer = signal<boolean>(false);

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['filter']) {
        this.filter.set(params['filter']);
      }
      if (params['page']) {
        this.page.set(Number(params['page']));
      }
      if (params['limit']) {
        this.limit.set(Number(params['limit']));
      }
    });
    console.log(
      'filter:',
      this.filter(),
      'page:',
      this.page(),
      'limit:',
      this.limit()
    );
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
    this.router.navigate([], {
      queryParams: {
        filter: this.filter(),
        page: this.page(),
        limit: this.limit(),
      },
    });
    this.customersService
      .getCustomers(this.filter(), this.page(), this.limit())
      .subscribe((data) => {
        this.customers.set(data);
      });
  };
  updatePage = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.page.set(Number(input.value));
    this.router.navigate([], {
      queryParams: {
        filter: this.filter(),
        page: this.page(),
        limit: this.limit(),
      },
    });
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
    this.router.navigate([], {
      queryParams: {
        filter: this.filter(),
        page: this.page(),
        limit: this.limit(),
      },
    });
    this.customersService
      .getCustomers(this.filter(), this.page(), this.limit())
      .subscribe((data) => {
        this.customers.set(data);
      });
  };
  openCustomerForm = () => {
    this.isAddCustomer.set(true);
  };
  closeCustomerForm = () => {
    this.isAddCustomer.set(false);
  };
}
