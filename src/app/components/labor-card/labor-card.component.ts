import { Component, Input } from '@angular/core';
import { Labor } from '../../types/labor';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-labor-card',
  imports: [CurrencyPipe],
  templateUrl: './labor-card.component.html',
  styleUrl: './labor-card.component.css',
})
export class LaborCardComponent {
  @Input() labor: Labor[] = [];
}
