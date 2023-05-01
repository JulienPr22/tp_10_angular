import { Status } from '../enum/status';
import { Tag } from '../enum/tag';
import DateDTO from './date-dto';

export default interface MessageDTO {
  id: number;
  senderId: number;
  relatedTicketId: number;
  content: string;
  date: DateDTO;
}
