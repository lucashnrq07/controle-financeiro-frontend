import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { MovementsPageComponent } from './features/movements/movements-page/movements-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MovementsPageComponent],
  template: `
    <app-header />
    <app-movements-page />
  `
})
export class AppComponent {}
