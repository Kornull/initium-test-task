import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {
  FilterNameService,
  LocalStoreService,
  RequestApiService,
  SortingService,
} from 'src/app/core/services';

import { ListData, TableData, User } from 'src/app/core/store';

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

  constructor(
    private filterNameService: FilterNameService,
    private sortingService: SortingService,
    private request: RequestApiService,
    private storeService: LocalStoreService
  ) {}

  ngOnInit(): void {
    const clientList = this.storeService.getClientsByLocalStore();
    if (clientList.length) {
      this.listData = {
        allCompleted: false,
        users: [...clientList],
      };
    } else {
      this.request
        .getUsersInfo()
        .pipe(
          map((val: TableData) => {
            if (val.users.length) {
              this.listData.users = val.users.map((user: User, i: number) => {
                return {
                  ...user,
                  id: `${i}${user.surname}`,
                  completed: false,
                };
              });
            }
            this.storeService.setClientsToLocalStore(this.listData.users);
          })
        )
        .subscribe();
    }
  }

  onFilterByName(): string {
    return this.filterNameService.getFilteredName();
  }

  onSorting(): string {
    return this.sortingService.getSortedTitle();
  }
}
