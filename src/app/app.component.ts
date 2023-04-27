import { Component } from '@angular/core';
import { TicketListComponent } from './components/ticket-list-component/ticket-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tp_10_angular';
  rootComponent = TicketListComponent;

  constructor(public router: Router) {}

  goToTickets() {
    console.log('goToTickets');

    this.router.navigate(['/tickets']);
  }

  goToUsers() {
    console.log('goToUsers');

    this.router.navigate(['/users']);
  }
}
