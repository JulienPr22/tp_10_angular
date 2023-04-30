import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import DetailTicketDTO from 'src/app/shared/models/detail-ticket-dto';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
})
export class TicketDetailComponent implements OnInit {
  detailTicket!: DetailTicketDTO;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    const ticketId = this.route.snapshot.paramMap.get('ticketId');
    console.log(ticketId);

    this.ticketService
      .getDetailTicketById(6)
      .subscribe((data: DetailTicketDTO) => {
        this.detailTicket = data;
        console.log(JSON.stringify(data));
      });
  }
}
