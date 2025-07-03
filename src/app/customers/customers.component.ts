import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../services/customers.service';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
// import { } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  imports: [JsonPipe],
  providers: [CustomersService],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  // private route: ActivatedRoute;
  customers: any = { totals: {}, customers: [] };
  constructor(
    private customersService: CustomersService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const limit = params['limit'] || 30;
      const page = Number(params['page']) || 1;
      const filter = params['filter'] || '';
      this.customersService
        .getCustomers(filter, page, limit)
        .subscribe((customers) => {
          console.log('customers', customers.customers);
          this.customers = customers;
        });
    });
  }
  updateFilter(event: Event) {
    const filter = event.target.value;
    console.log('filter', filter);
    this.router.navigate([], {
      queryParams: { filter },
      queryParamsHandling: 'merge', // Preserve other query parameters
    });
  }
}
