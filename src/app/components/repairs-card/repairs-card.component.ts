import { Component, Input } from '@angular/core';
import { Estimate } from '../../types/estimate';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-repairs-card',
  imports: [DatePipe],
  templateUrl: './repairs-card.component.html',
  styleUrl: './repairs-card.component.css',
})
export class RepairsCardComponent {
  @Input() repairs: Estimate[] = [];
}
