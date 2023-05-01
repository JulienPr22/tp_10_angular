import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import DetailTicketDTO from 'src/app/shared/models/detail-ticket-dto';
import { Util } from 'src/app/util';
import { DeleteTicketDialogComponent } from '../delete-ticket-dialog/delete-ticket-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
})
export class TicketDetailComponent implements OnInit {
  ticketId!: number;
  detailTicket!: DetailTicketDTO;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService,
    public util: Util,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('ticketId');
    this.ticketId = Number(id);
    this.ticketService
      .getDetailTicketById(Number(this.ticketId))
      .subscribe((data: DetailTicketDTO) => {
        this.detailTicket = data;
      });
  }

  editTicket() {
    this.router.navigate(['/edit/ticket', this.ticketId]);
  }

  deleteTicketDialog() {
    const dialogRef = this.dialog.open(DeleteTicketDialogComponent, {
      width: '250px',
      data: 'Voulez-vous vraiment supprimer ce ticket ?',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'yes') {
        this.ticketService.deleteTicket(this.ticketId);
        this.router.navigate(['/']);
      }
    });
  }
}
