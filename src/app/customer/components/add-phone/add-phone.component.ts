import { Component, inject, Input, input } from '@angular/core';
import { PhonesService } from '../../../services/phones.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Phone } from '../../../types/phone';

@Component({
  selector: 'app-add-phone',
  imports: [ReactiveFormsModule],
  providers: [PhonesService],
  templateUrl: './add-phone.component.html',
  styleUrl: './add-phone.component.css',
})
export class AddPhoneComponent {
  // @Input() id!: string;
  // id = input.required<string>();
  id!: string;
  route: ActivatedRoute = inject(ActivatedRoute);
  phoneService = inject(PhonesService);
  router = inject(Router);
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.phoneForm.patchValue({
      customer_id: this.id,
    });
  }
  phoneForm = new FormGroup({
    customer_id: new FormControl(this.id),
    phone_number: new FormControl('', Validators.required),
    phone_type: new FormControl('', Validators.required),
  });

  onSubmit() {
    const phone: Phone = this.phoneForm.value as unknown as Phone;
    this.phoneService.addPhone(phone).subscribe((data) => {
      console.log('id', this.id, 'Phone added:', data);
      this.router.navigate([`/customers/${data.customer_id}`]);
      this.phoneForm.reset();
    });
  }
}
