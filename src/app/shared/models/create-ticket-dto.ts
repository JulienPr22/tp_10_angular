import { Tag } from '../enum/tag';

export class CreateTicketDTO {
  title: string;
  description: string;
  reporter_id: Number;
  assignee_id: Number;
  tags: Array<Tag>;

  constructor(
    title: string,
    description: string,
    reporter_id: Number,
    assignee_id: Number,
    tags: Array<Tag>
  ) {
    this.title = title;
    this.description = description;
    this.reporter_id = reporter_id;
    this.assignee_id = assignee_id;
    this.tags = tags;
  }
}
