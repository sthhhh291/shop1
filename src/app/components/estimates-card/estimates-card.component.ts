import { Component, Input } from '@angular/core';
import { Estimate } from '../../types/estimate';

@Component({
  selector: 'app-estimates-card',
  imports: [],
  templateUrl: './estimates-card.component.html',
  styleUrl: './estimates-card.component.css',
})
export class EstimatesCardComponent {
  @Input() estimates: Estimate[] = [];
}
