import { Status } from '../enum/status';
import { Tag } from '../enum/tag';
import DateDTO from './date-dto';

export default interface DetailTicketDTO {
  id: number;
  title: string;
  description: string;
  creationDate: DateDTO;
  closingDate: DateDTO;
  reporter: string;
  assignee: string;
  reporter_id: number;
  assignee_id: number;
  status: Status;
  tags: Array<Tag>;
}
