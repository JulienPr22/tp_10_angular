import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import UserDTO from 'src/app/shared/models/user-dto';
import { Util } from 'src/app/util';

export interface usersTable {
  position: number;
  firstname: string;
  lastname: string;
  registrationDate: string;
}

const ELEMENT_DATA: usersTable[] = [];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: UserDTO[] = [];
  displayedColumns: string[] = [
    'position',
    'firstname',
    'lastname',
    'registrationDate',
  ];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<usersTable>;

  constructor(private userService: UserService, private util: Util) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: UserDTO[]) => {
      this.users = data;
      let position = 1;
      for (let user of this.users) {
        this.dataSource.push({
          position: position,
          firstname: user.firstname,
          lastname: user.lastname,
          registrationDate: 'undifined',
        });
        position++;
      }
      this.table.renderRows();
    });
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
