import { Component } from '@angular/core';
import { Customer } from '../../../customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  imports: [FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
})
export class AddCustomerComponent {
  customer: Customer = {
    id: 0,
    first_name: '',
    last_name: '',
    notes: '',
  };
}
