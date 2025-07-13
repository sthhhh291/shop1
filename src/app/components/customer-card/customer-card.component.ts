import { Component, Input } from '@angular/core';
import { Customer } from '../../types/customer';

@Component({
  selector: 'app-customer-card',
  imports: [],
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.css',
})
export class CustomerCardComponent {
  @Input() customer: Customer | null = null;
}
