import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './customers/components/add-customer/add-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchComponent } from './customers/components/search/search.component';

export const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: 'add', component: AddCustomerComponent },
      { path: 'search', component: SearchComponent },
      { path: ':id', component: CustomerComponent },
    ],
  },
];
