import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';

const routes: Routes = [
  { path: '', component: TicketListComponent },
  { path: 'ticket/:ticketId', component: TicketDetailComponent },
  { path: 'create/ticket', component: AddTicketComponent },
  { path: 'edit/ticket/:ticketId', component: EditTicketComponent },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
