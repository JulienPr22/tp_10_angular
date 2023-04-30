import { Status } from '../enum/status';
import { Tag } from '../enum/tag';

export default interface DateDTO {
  nano: number;
  year: number;
  monthValue: number;
  dayOfMonth: number;
  hour: number;
  minute: number;
  second: number;
  month: String;
  dayOfWeek: String;
  dayOfYear: number;
  chronology: { id: 'ISO'; calendarType: 'iso8601'; isoBased: true };
}
