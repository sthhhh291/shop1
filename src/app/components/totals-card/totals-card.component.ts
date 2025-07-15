import { Component, Input } from '@angular/core';
import { Totals } from '../../types/totals';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-totals-card',
  imports: [CurrencyPipe],
  templateUrl: './totals-card.component.html',
  styleUrl: './totals-card.component.css',
})
export class TotalsCardComponent {
  @Input() totals: Totals | null = null;
}
