import { Component, Input } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [RouterModule],
  providers: [CustomersService],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  //   @Input() filter: string = '';
  //   @Input() page: number = 1;
  //   @Input() pageSize: number = 10;
  //   ngOnInit() {
}
