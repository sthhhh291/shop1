import { Component, Input } from '@angular/core';
import { Car } from '../../types/car';

@Component({
  selector: 'app-cars-card',
  imports: [],
  templateUrl: './cars-card.component.html',
  styleUrl: './cars-card.component.css',
})
export class CarsCardComponent {
  @Input() cars: Car[] | undefined;
}
