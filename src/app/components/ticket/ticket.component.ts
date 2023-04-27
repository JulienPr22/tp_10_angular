import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tag } from 'src/app/shared/enum/tag';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent {
  @Input()
  ticketId!: number;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() creationDate: Date | undefined;
  @Input() tags: Set<Tag> | undefined;

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();
  onClick() {
    this.clicked.emit();
  }
}