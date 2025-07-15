import { Component, Input } from '@angular/core';
import { Part } from '../../types/part';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-parts-card',
  imports: [CurrencyPipe],
  templateUrl: './parts-card.component.html',
  styleUrl: './parts-card.component.css',
})
export class PartsCardComponent {
  @Input() parts: Part[] = [];
}
