import { Status } from '../enum/status';
import { Tag } from '../enum/tag';
import DateDTO from './date-dto';

export default interface DetailTicketDTO {
  id: number;
  title: String;
  description: String;
  creationDate: DateDTO;
  closingDate: DateDTO;
  reporter: String;
  assignee: String;
  status: Status;
  tags: Set<Tag>;
}
