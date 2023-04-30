import { Status } from '../enum/status';
import { Tag } from '../enum/tag';
import DateDTO from './date-dto';

export default interface SummaryTicketDTO {
  id: number;
  title: String;
  creationDate: DateDTO;
  assignee: String;
  status: Status;
  tags: Set<Tag>;
}
