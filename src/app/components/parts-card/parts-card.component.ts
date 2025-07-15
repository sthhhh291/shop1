import { Component, Input } from '@angular/core';
import { Part } from '../../types/part';

@Component({
  selector: 'app-parts-card',
  imports: [],
  templateUrl: './parts-card.component.html',
  styleUrl: './parts-card.component.css',
})
export class PartsCardComponent {
  @Input() parts: Part[] = [];
}
