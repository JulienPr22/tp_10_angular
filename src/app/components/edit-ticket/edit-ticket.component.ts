import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
import { Tag } from 'src/app/shared/enum/tag';
import { CreateTicketDTO } from 'src/app/shared/models/create-ticket-dto';
import DetailTicketDTO from 'src/app/shared/models/detail-ticket-dto';
import UserDTO from 'src/app/shared/models/user-dto';
import { Util } from 'src/app/util';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
})
export class EditTicketComponent implements OnInit {
  users: UserDTO[] = [];
  ticket!: DetailTicketDTO;

  editTicketForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    reporter_id: new FormControl('', Validators.required),
    assignee_id: new FormControl('', Validators.required),
    tags: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserService,
    private ticketService: TicketService,
    public router: Router,
    private route: ActivatedRoute,
    public util: Util
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('ticketId');
    const ticketId = Number(id);

    this.ticketService
      .getDetailTicketById(ticketId)
      .subscribe((data: DetailTicketDTO) => {
        this.ticket = data;
      });

    this.userService.getUsers().subscribe((data: UserDTO[]) => {
      this.users = data;
    });
  }

  onSubmit() {
    const newTags: Array<Tag> = [];
    if (this.editTicketForm.value.tags) {
      for (let value of this.editTicketForm.value.tags) {
        newTags.push(this.util.StringTagToEnum(value));
      }
    }
    let createTicketDTO = new CreateTicketDTO(
      this.editTicketForm.value.title!,
      this.editTicketForm.value.description!,
      Number(this.editTicketForm.value.reporter_id),
      Number(this.editTicketForm.value.assignee_id),
      newTags
    );

    console.log(createTicketDTO);

    this.ticketService
      .updateTicket(createTicketDTO, this.ticket.id)
      .subscribe((response: Response) => {
        this.router.navigate(['/']);
      });
  }

  updateTags(tags: Tag[]) {}
}
