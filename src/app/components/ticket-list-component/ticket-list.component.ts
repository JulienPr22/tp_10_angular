import { Component, OnInit } from '@angular/core';
import TicketDTO from 'src/app/shared/models/detail-ticket-dto';
import { Tag } from 'src/app/shared/enum/tag';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { BehaviorSubject, Subject, first, takeUntil } from 'rxjs';
import SummaryTicketDTO from 'src/app/shared/models/summary-ticket-dto';
import { Status } from 'src/app/shared/enum/status';
import DateDTO from 'src/app/shared/models/date-dto';

@Component({
  selector: 'app-liste-tickets',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  summaryTickets: SummaryTicketDTO[] = [];

  constructor(public router: Router, private ticketService: TicketService) {}

  ngOnInit() {
    this.ticketService
      .getAllSummaryTickets()
      .subscribe((data: SummaryTicketDTO[]) => {
        this.summaryTickets = data;
        console.log(JSON.stringify(data));
      });
  }

  goToTicket(ticketId: number) {
    console.log('goToTicket');
    this.router.navigate(['/ticket', ticketId]);
  }

  addTicket() {
    console.log('addTicket');
    this.router.navigate(['/create/ticket']);
  }

  transformToValidDate(dateDTO: DateDTO) {
    let date = new Date();
    date.setFullYear(dateDTO.year);
    date.setMonth(dateDTO.monthValue);
    date.setDate(dateDTO.dayOfMonth);
    return date;
  }

  get ticketsInProgress() {
    return this.summaryTickets.filter(
      (ticket) => ticket.status === Status.DOING
    );
  }

  get ticketsToDo() {
    return this.summaryTickets.filter(
      (ticket) => ticket.status === Status.TO_DO
    );
  }

  get ticketsClosed() {
    return this.summaryTickets.filter(
      (ticket) => ticket.status === Status.CLOSE
    );
  }
}
