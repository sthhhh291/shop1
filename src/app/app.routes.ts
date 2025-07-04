import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

export const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customers', component: CustomersComponent },
  {
    path: 'customers/:id',
    component: CustomersComponent,
    data: { title: 'Customer Details' },
  },
];
