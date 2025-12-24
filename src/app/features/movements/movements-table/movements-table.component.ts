import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-movements-table',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './movements-table.component.html',
  styleUrls: ['./movements-table.component.scss']
})
export class MovementsTableComponent {

  @Input() movements: any[] = [];
}
