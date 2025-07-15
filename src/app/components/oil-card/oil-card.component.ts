import { Component, Input } from '@angular/core';
import { Part } from '../../types/part';

@Component({
  selector: 'app-oil-card',
  imports: [],
  templateUrl: './oil-card.component.html',
  styleUrl: './oil-card.component.css',
})
export class OilCardComponent {
  @Input() oil: Part[] = [];
}
