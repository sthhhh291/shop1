import { Component, Input } from '@angular/core';
import { Estimate } from '../../types/estimate';

@Component({
  selector: 'app-repairs-card',
  imports: [],
  templateUrl: './repairs-card.component.html',
  styleUrl: './repairs-card.component.css',
})
export class RepairsCardComponent {
  @Input() repairs: Estimate[] = [];
}
