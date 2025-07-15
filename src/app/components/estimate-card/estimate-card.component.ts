import { Component, Input } from '@angular/core';
import { Estimate } from '../../types/estimate';

@Component({
  selector: 'app-estimate-card',
  imports: [],
  templateUrl: './estimate-card.component.html',
  styleUrl: './estimate-card.component.css',
})
export class EstimateCardComponent {
  @Input() estimate: Estimate | null = null;
}
