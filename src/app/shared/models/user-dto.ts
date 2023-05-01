import { Status } from '../enum/status';
import { Tag } from '../enum/tag';
import DateDTO from './date-dto';

export default interface UserDTO {
  id: number;
  firstname: string;
  lastname: DateDTO;
  registrationdate: DateDTO;
}
