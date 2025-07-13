import { Component, input, Input } from '@angular/core';
import { Customer } from '../../types/customer';

@Component({
  selector: 'app-customer-card',
  imports: [],
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.css',
})
export class CustomerCardComponent {
  // @Input() customer: Customer | null = null
  customer: Customer = input.required<Customer>({
    id: 0,
    first_name: '',
    last_name: '',
    notes: '',
  });
}
