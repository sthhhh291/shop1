import { Component } from '@angular/core';
import { Customer } from '../../../types/customer';
import { CustomersService } from '../../../services/customers.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  imports: [ReactiveFormsModule],
  providers: [CustomersService],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
})
export class AddCustomerComponent {
  constructor(
    private http: HttpClient,
    private customersService: CustomersService,
    private router: Router
  ) {
    this.customerService = customersService;
  }
  customerForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    notes: new FormControl(''),
  });
  customerService: CustomersService;
  onSubmit() {
    const customer: Customer = this.customerForm.value as Customer;
    this.customerService.addCustomer(customer).subscribe((response) => {
      this.router.navigate([`/customers/${response.insertId}`]); // Navigate to the new customer's detail page
      this.customerForm.reset();
    });
  }
  close() {}
}
