import { Component, OnInit } from '@angular/core';
import TicketDTO from 'src/app/shared/models/ticket-dto';
import { Tag } from 'src/app/shared/enum/tag';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-tickets',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent {
  tickets: TicketDTO[] = [];
  tags: Set<Tag> = new Set<Tag>([Tag.FEATURE, Tag.BUG]);
  creationDate = new Date();

  constructor(public router: Router) {}

  goToTicket(ticketId: number) {
    console.log('goToTicket');

    this.router.navigate(['/ticket', ticketId]);
  }
}
