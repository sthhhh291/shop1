import { Component, inject, input, signal } from '@angular/core';
import { Customer } from '../../../types/customer';
import { CustomersService } from '../../../services/customers.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  imports: [ReactiveFormsModule],
  providers: [CustomersService],
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css',
})
export class EditCustomerComponent {
  customerService: CustomersService = inject(CustomersService);
  router: Router = inject(Router);
  id = input.required<string>();
  customer = signal<Customer | null>(null);
  customerForm = new FormGroup({
    id: new FormControl<number | null>(null),
    first_name: new FormControl(),
    last_name: new FormControl(),
    notes: new FormControl(),
  });

  ngOnInit() {
    this.customerService.getCustomer(Number(this.id())).subscribe((data) => {
      // console.log('Customer data:', data, 'id', this.id());
      this.customer.set(data);
      this.customerForm.patchValue({
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        notes: data.notes,
      });
    });
  }

  onSubmit() {
    const customer: Customer = this.customerForm.value as Customer;
    this.customerService.updateCustomer(customer).subscribe((response) => {
      this.router.navigate([`/customers/${this.id()}`]); // Navigate to the new customer's detail page
      this.customerForm.reset();
    });
  }
}
