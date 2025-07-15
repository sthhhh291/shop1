import { Component, Input } from '@angular/core';
import { Estimate } from '../../types/estimate';

@Component({
  selector: 'app-repair-card',
  imports: [],
  templateUrl: './repair-card.component.html',
  styleUrl: './repair-card.component.css',
})
export class RepairCardComponent {
  @Input() repair: Estimate | null = null;
}
