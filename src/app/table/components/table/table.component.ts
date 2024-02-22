import { Component, OnInit } from '@angular/core';

import { ListData, User } from 'src/app/core/store';

import { mockData } from 'src/app/mock/mock-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  listData: ListData = {
    allCompleted: false,
    users: [],
  };

  ngOnInit(): void {
    this.listData.users = mockData.users.map((user: User, i: number) => {
      return {
        ...user,
        id: `${i}${user.surname}`,
        completed: false,
      };
    });
  }
}
