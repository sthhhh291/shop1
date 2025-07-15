import { Component, inject, input, signal } from '@angular/core';
import { Car } from '../types/car';
import { Customer } from '../types/customer';
import { Estimate } from '../types/estimate';
import { Labor } from '../types/labor';
import { Part } from '../types/part';
import { Phone } from '../types/phone';
import { Totals } from '../types/totals';
import { EstimatesService } from '../services/estimates.service';
import { EstimateCardComponent } from '../components/estimate-card/estimate-card.component';
import { CustomerCardComponent } from '../components/customer-card/customer-card.component';
import { CarCardComponent } from '../components/car-card/car-card.component';
import { PhonesCardComponent } from '../components/phones-card/phones-card.component';
import { RepairCardComponent } from '../components/repair-card/repair-card.component';
import { LaborCardComponent } from '../components/labor-card/labor-card.component';
import { PartsCardComponent } from '../components/parts-card/parts-card.component';
import { OilCardComponent } from '../components/oil-card/oil-card.component';
import { TotalsCardComponent } from '../components/totals-card/totals-card.component';

@Component({
  selector: 'app-estimate',
  imports: [
    EstimateCardComponent,
    CustomerCardComponent,
    PhonesCardComponent,
    CarCardComponent,
    LaborCardComponent,
    PartsCardComponent,
    OilCardComponent,
    TotalsCardComponent,
  ],
  providers: [EstimatesService],
  templateUrl: './estimate.component.html',
  styleUrl: './estimate.component.css',
})
export class EstimateComponent {
  estimateService = inject(EstimatesService);
  customer = signal<Customer | null>(null);
  phones = signal<Phone[]>([]);
  car = signal<Car | null>(null);
  estimate = signal<Estimate | null>(null);
  labor = signal<Labor[]>([]);
  parts = signal<Part[]>([]);
  oil = signal<Part[]>([]);
  totals = signal<Totals | null>(null);
  id = input.required<string>();
  ngOnInit() {
    this.estimateService.getEstimate(Number(this.id())).subscribe((data) => {
      this.estimate.set(data);
    });
    this.estimateService
      .getEstimateCustomer(Number(this.id()))
      .subscribe((data) => {
        this.customer.set(data);
      });
    this.estimateService.getEstimateCar(Number(this.id())).subscribe((data) => {
      this.car.set(data);
    });
    this.estimateService
      .getEstimatePhones(Number(this.id()))
      .subscribe((data) => {
        this.phones.set(data);
      });
    this.estimateService
      .getEstimateLabor(Number(this.id()))
      .subscribe((data) => {
        this.labor.set(data);
      });
    this.estimateService
      .getEstimateParts(Number(this.id()))
      .subscribe((data) => {
        this.parts.set(data);
      });
    this.estimateService.getEstimateOil(Number(this.id())).subscribe((data) => {
      this.oil.set(data);
    });
    this.estimateService
      .getEstimateTotals(Number(this.id()))
      .subscribe((data) => {
        this.totals.set(data);
      });
  }
}
