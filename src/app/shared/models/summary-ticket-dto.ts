import { Status } from '../enum/status';
import { Tag } from '../enum/tag';
import DateDTO from './date-dto';

export default interface SummaryTicketDTO {
  id: number;
  title: string;
  creationDate: DateDTO;
  assignee: string;
  status: Status;
  tags: Array<Tag>;
}
