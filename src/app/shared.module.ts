import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TicketComponent } from './components/ticket/ticket.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';
import { MatTableModule } from '@angular/material/table';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    TicketComponent,
    TicketDetailComponent,
    TicketListComponent,
    AddTicketComponent,
    EditTicketComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FontAwesomeModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
  ],
  exports: [TicketComponent, MatIconModule],
})
export class SharedModule {}
