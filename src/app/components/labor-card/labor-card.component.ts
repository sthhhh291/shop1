import { Component, Input } from '@angular/core';
import { Labor } from '../../types/labor';

@Component({
  selector: 'app-labor-card',
  imports: [],
  templateUrl: './labor-card.component.html',
  styleUrl: './labor-card.component.css',
})
export class LaborCardComponent {
  @Input() labor: Labor[] = [];
}
