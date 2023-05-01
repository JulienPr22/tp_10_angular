import { Injectable } from '@angular/core';
import DateDTO from './shared/models/date-dto';
import { Status } from './shared/enum/status';
import { Tag } from './shared/enum/tag';
import LocalDateDTO from './shared/models/date-time-dto';

@Injectable({
  providedIn: 'root',
})
export class Util {
  constructor() {}

  transformToValidDate(dateDTO: DateDTO) {
    return new Date(dateDTO.year, dateDTO.monthValue - 1, dateDTO.dayOfMonth);
  }

  transformToValidLocalDate(dateTimeDTO: LocalDateDTO) {
    return new Date(
      dateTimeDTO.year,
      dateTimeDTO.monthValue - 1,
      dateTimeDTO.dayOfMonth
    );
  }

  dateToString(dateDTO: DateDTO): string {
    let dateString = '';
    // dateDTO.dayOfMonth.toString();
    dateString += '/';
    dateString += (dateDTO.monthValue - 1).toString();
    dateString += dateDTO.year.toString();
    return dateString;
  }

  statusEnumToString(status: Status) {
    if (status == Status.TO_DO) {
      return 'TODO';
    } else if (status == Status.DOING) {
      return 'In progress';
    } else if (status == Status.CLOSE) {
      return 'Closed';
    }
    return 'unknown';
  }

  StringTagToEnum(tag: String) {
    if (tag == 'FEATURE') {
      return Tag.FEATURE;
    } else if (tag == 'BUG') {
      return Tag.BUG;
    } else if (tag == 'TECH') {
      return Tag.TECH;
    } else if (tag == 'FRONT') {
      return Tag.FRONT;
    } else if (tag == 'BACK') {
      return Tag.BACK;
    }
    return Tag.FEATURE;
  }
}
