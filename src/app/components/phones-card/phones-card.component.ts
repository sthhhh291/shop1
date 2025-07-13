import { Component, Input } from '@angular/core';
import { Phone } from '../../types/phone';

@Component({
  selector: 'app-phones-card',
  imports: [],
  templateUrl: './phones-card.component.html',
  styleUrl: './phones-card.component.css',
})
export class PhonesCardComponent {
  @Input() phones: Phone[] | undefined;
}
