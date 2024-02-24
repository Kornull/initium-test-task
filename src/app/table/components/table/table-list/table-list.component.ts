import { ChangeDataService } from 'src/app/core/services';
import { Component, Input, OnInit } from '@angular/core';

import { ListData, UserInfo } from 'src/app/core/store';
import { tap } from 'rxjs';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  @Input() userListData!: ListData;

  allComplete: boolean = false;

  isSomeComlete: boolean = false;

  constructor(private changeData: ChangeDataService) {}

  ngOnInit(): void {
    this.changeData.selectedUsers$
      .pipe(
        tap(selectedClients => {
          if (selectedClients.length === this.userListData.users.length) {
            this.allComplete = true;
            this.isSomeComlete = false;
          }

          if (
            selectedClients.length &&
            selectedClients.length !== this.userListData.users.length
          ) {
            this.allComplete = false;
            this.isSomeComlete = true;
          }

          if (!selectedClients.length) {
            this.allComplete = false;
            this.isSomeComlete = false;
          }
        })
      )
      .subscribe();
  }

  updateAllComplete(): void {
    this.allComplete =
      this.userListData.users != null &&
      this.userListData.users.every(t => t.completed);

    this.updateSelecedUsers();
  }

  setAll(completed: boolean): void {
    this.allComplete = completed;
    this.userListData.users = this.userListData.users.map((user: UserInfo) => {
      return {
        ...user,
        completed,
      };
    });
    this.updateSelecedUsers();
  }

  updateSelecedUsers(): void {
    this.changeData.setSelecteUsers(this.userListData.users);
  }
}
