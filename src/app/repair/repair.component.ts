import { Component, inject, Inject, input, signal } from '@angular/core';
import { RepairsService } from '../services/repairs.service';
import { Estimate } from '../types/estimate';
import { Labor } from '../types/labor';
import { Part } from '../types/part';
import { Totals } from '../types/totals';
import { Customer } from '../types/customer';
import { Car } from '../types/car';
import { RepairCardComponent } from '../components/repair-card/repair-card.component';
import { LaborCardComponent } from '../components/labor-card/labor-card.component';
import { TotalsCardComponent } from '../components/totals-card/totals-card.component';
import { OilCardComponent } from '../components/oil-card/oil-card.component';
import { PartsCardComponent } from '../components/parts-card/parts-card.component';
import { CustomerCardComponent } from '../components/customer-card/customer-card.component';
import { CarCardComponent } from '../components/car-card/car-card.component';
import { PhonesCardComponent } from '../components/phones-card/phones-card.component';
import { Phone } from '../types/phone';
@Component({
  selector: 'app-repair',
  imports: [
    CustomerCardComponent,
    CarCardComponent,
    PhonesCardComponent,
    RepairCardComponent,
    LaborCardComponent,
    RepairCardComponent,
    PartsCardComponent,
    OilCardComponent,
    TotalsCardComponent,
  ],
  providers: [RepairsService],
  templateUrl: './repair.component.html',
  styleUrl: './repair.component.css',
})
export class RepairComponent {
  repairService = inject(RepairsService);
  customer = signal<Customer | null>(null);
  phones = signal<Phone[]>([]);
  car = signal<Car | null>(null);
  repair = signal<Estimate | null>(null);
  labor = signal<Labor[]>([]);
  parts = signal<Part[]>([]);
  oil = signal<Part[]>([]);
  totals = signal<Totals | null>(null);
  id = input.required<string>();
  carId: number = 0;
  customerId: number = 0;
  ngOnInit() {
    this.repairService.getRepair(Number(this.id())).subscribe((data) => {
      this.repair.set(data);
    });
    this.repairService.getRepairLabor(Number(this.id())).subscribe((data) => {
      this.labor.set(data);
    });
    this.repairService.getRepairParts(Number(this.id())).subscribe((data) => {
      this.parts.set(data);
    });
    this.repairService.getRepairOil(Number(this.id())).subscribe((data) => {
      this.oil.set(data);
    });
    this.repairService.getRepairTotals(Number(this.id())).subscribe((data) => {
      this.totals.set(data);
    });
    this.repairService.getRepairCar(Number(this.id())).subscribe((data) => {
      this.car.set(data);
    });
    this.repairService
      .getRepairCustomer(Number(this.id()))
      .subscribe((data) => {
        this.customer.set(data);
      });
    this.repairService.getRepairPhones(Number(this.id())).subscribe((data) => {
      this.phones.set(data);
    });
  }
}
