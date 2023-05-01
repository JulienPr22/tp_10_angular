import DateTimeDTO from './date-time-dto';

export default interface UserDTO {
  id: number;
  firstname: string;
  lastname: string;
  registrationdate: DateTimeDTO;
}
