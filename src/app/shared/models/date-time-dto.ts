import { Status } from '../enum/status';
import { Tag } from '../enum/tag';

export default interface LocalDateDTO {
  year: number;
  monthValue: number;
  dayOfMonth: number;
  month: string;
  dayOfWeek: string;
  dayOfYear: number;
  era: string;
  leapYear: boolean;
  chronology: { id: 'ISO'; calendarType: 'iso8601'; isoBased: true };
}
