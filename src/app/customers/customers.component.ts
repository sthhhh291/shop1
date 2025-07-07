import { Component } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [RouterModule],
  providers: [CustomersService],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  // filter: string = '';
  // page: number = 1;
  // limit: number = 30;
  // isAddCustomer: boolean = false;
  // customers: { totals: any; customers: Customer[] } = {
  //   totals: {},
  //   customers: [],
  // };
  // constructor(
  //   private customersService: CustomersService,
  //   private http: HttpClient,
  //   private route: ActivatedRoute,
  //   private router: Router
  // ) {}
  // ngOnInit() {
  //   this.route.queryParams.subscribe((params) => {
  //     this.limit = Number(params['limit']) || 30;
  //     this.page = Number(params['page']) || 1;
  //     this.filter = params['filter'] || '';
  //     this.customersService
  //       .getCustomers(this.filter, this.page, this.limit)
  //       .subscribe((customers) => {
  //         console.log('customers', customers.customers);
  //         this.customers = customers;
  //       });
  //   });
  // }
  // updateFilter(event: any) {
  //   this.filter = event.target.value;
  //   this.page = 1;
  //   console.log('filter', this.filter);
  //   this.router.navigate([], {
  //     queryParams: { filter: this.filter, page: this.page },
  //     queryParamsHandling: 'merge',
  //   });
  // }
  // updatePage(event: any) {
  //   this.page = event.target.value;
  //   this.router.navigate([], {
  //     queryParams: { page: this.page },
  //     queryParamsHandling: 'merge',
  //   });
  // }
  // updateLimit(event: any) {
  //   this.limit = event.target.value;
  //   this.page = 1;
  //   this.router.navigate([], {
  //     queryParams: { limit: this.limit, page: this.page },
  //     queryParamsHandling: 'merge',
  //   });
  // }
}
