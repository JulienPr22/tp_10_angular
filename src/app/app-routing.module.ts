import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';

const routes: Routes = [
  { path: '', component: TicketListComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'ticket/:id', component: TicketDetailComponent },
  { path: 'create/ticket', component: AddTicketComponent },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
