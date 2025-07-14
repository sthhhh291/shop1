import { Component, inject, Inject, input, signal } from '@angular/core';
import { RepairsService } from '../services/repairs.service';
import { Estimate } from '../types/estimate';
import { JsonPipe } from '@angular/common';
import { Labor } from '../types/labor';
import { Part } from '../types/part';
import { Totals } from '../types/totals';
@Component({
  selector: 'app-repair',
  imports: [JsonPipe],
  providers: [RepairsService],
  templateUrl: './repair.component.html',
  styleUrl: './repair.component.css',
})
export class RepairComponent {
  repairService = inject(RepairsService);
  repair = signal<Estimate | null>(null);
  labor = signal<Labor[]>([]);
  parts = signal<Part[]>([]);
  oil = signal<Part[]>([]);
  totals = signal<Totals | null>(null);
  id = input.required<string>();
  ngOnInit() {
    this.repairService.getRepair(Number(this.id())).subscribe((data) => {
      console.log('repair data:', data);
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
    console.log('repair data:', this.repair());
    console.log('labor data:', this.labor());
    console.log('parts data:', this.parts());
    console.log('oil data:', this.oil());
    console.log('totals data:', this.totals());
  }
}
