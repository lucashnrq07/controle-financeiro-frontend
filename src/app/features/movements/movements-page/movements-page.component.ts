import { Component } from '@angular/core';
import { MovementsTableComponent } from '../movements-table/movements-table.component';

@Component({
  selector: 'app-movements-page',
  standalone: true,
  imports: [MovementsTableComponent],
  templateUrl: './movements-page.component.html',
  styleUrls: ['./movements-page.component.scss']
})
export class MovementsPageComponent {}
