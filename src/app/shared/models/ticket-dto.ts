import { Status } from '../enum/status';
import { Tag } from '../enum/tag';

export default interface TicketDTO {
  id: number;
  title: string;
  description: string;
  creationDate: Date;
  closingDate: Date;
  status: Status;
  tags: Set<Tag>;
}
