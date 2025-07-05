import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './customers/components/add-customer/add-customer.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: 'add', component: AddCustomerComponent },
      { path: ':id', component: CustomerComponent },
    ],
  },
];
