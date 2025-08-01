import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './customers/components/add-customer/add-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchComponent as CustomerSearchComponent } from './customers/components/search/search.component';
import { EditCustomerComponent } from './customers/components/edit-customer/edit-customer.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './cars/components/add-car/add-car.component';
import { CarComponent } from './car/car.component';
import { SearchComponent as CarSearchComponent } from './cars/components/search/search.component';
import { AddPhoneComponent } from './customer/components/add-phone/add-phone.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { EstimateComponent } from './estimate/estimate.component';
import { RepairsComponent } from './repairs/repairs.component';
import { RepairComponent } from './repair/repair.component';

export const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'add', component: AddCustomerComponent },
      { path: 'search', component: CustomerSearchComponent },
      { path: ':id', component: CustomerComponent },
      { path: ':id/edit', component: EditCustomerComponent },
      { path: ':id/add-phone', component: AddPhoneComponent },
    ],
  },
  {
    path: 'cars',
    component: CarsComponent,
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'add', component: AddCarComponent },
      { path: 'search', component: CarSearchComponent },
      { path: ':id', component: CarComponent },
    ],
  },
  {
    path: 'estimates',
  // component: EstimatesComponent,
    children: [
      { path: '', component: EstimatesComponent, pathMatch: 'full' },
      // { path: 'add', component: AddEstimateComponent },
      // { path: 'search', component: EstimateSearchComponent },
      { path: ':id', component: EstimateComponent },
    ],
  },
  {
    path: 'repairs',
    // component: RepairsComponent,
    children: [
      { path: '', component: RepairsComponent, pathMatch: 'full' },
      { path: ':id', component: RepairComponent },
    ],
  },
  { path: '**', redirectTo: 'customers', pathMatch: 'full' },
];
