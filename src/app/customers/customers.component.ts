import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  customers: Customer[] = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      notes: 'Regular customer',
    },
    {
      id: 2,
      first_name: 'Jane',
      last_name: 'Smith',
      notes: 'VIP customer',
    },
  ];
}
