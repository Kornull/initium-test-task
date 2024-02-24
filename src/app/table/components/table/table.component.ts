import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

import {
  ChangeDataService,
  FilterNameService,
  LocalStoreService,
  RequestApiService,
  SortingService,
} from 'src/app/core/services';

import { ListData, TableData, User, UserInfo } from 'src/app/core/store';

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
    private updateData: ChangeDataService,
    private sortingService: SortingService,
    private request: RequestApiService,
    private storeService: LocalStoreService,
    private dataService: ChangeDataService
  ) {
    dataService.clients$
      .pipe(
        tap(clients => {
          this.listData = {
            ...this.listData,
            users: [...clients],
          };
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    const clientList = this.storeService.getClientsByLocalStore();
    if (clientList.length) {
      this.updateData.updateClientsList(clientList);
    } else {
      this.request
        .getUsersInfo()
        .pipe(
          map((val: TableData) => {
            let listClients: UserInfo[] = [];
            if (val.users.length) {
              listClients = val.users.map((user: User, i: number) => {
                return {
                  ...user,
                  id: `${i}${user.surname}`,
                  completed: false,
                };
              });
            }
            this.updateData.updateClientsList(listClients);
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
