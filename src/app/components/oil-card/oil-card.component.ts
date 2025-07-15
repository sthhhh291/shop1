import { Component, Input } from '@angular/core';
import { Part } from '../../types/part';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-oil-card',
  imports: [CurrencyPipe],
  templateUrl: './oil-card.component.html',
  styleUrl: './oil-card.component.css',
})
export class OilCardComponent {
  @Input() oil: Part[] = [];
}
