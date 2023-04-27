import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TicketComponent } from './components/ticket/ticket.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [TicketComponent, TicketDetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FontAwesomeModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  exports: [TicketComponent, MatIconModule],
})
export class SharedModule {}
