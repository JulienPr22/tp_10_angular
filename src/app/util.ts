import { Injectable } from '@angular/core';
import DateDTO from './shared/models/date-dto';
import { Status } from './shared/enum/status';
import { Tag } from './shared/enum/tag';

@Injectable({
  providedIn: 'root',
})
export class Util {
  constructor() {}

  transformToValidDate(dateDTO: DateDTO) {
    return new Date(dateDTO.year, dateDTO.monthValue - 1, dateDTO.dayOfMonth);
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
