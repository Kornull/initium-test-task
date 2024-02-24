import { ChangeDataService } from 'src/app/core/services';
import { Component, Input } from '@angular/core';

import { ListData, UserInfo } from 'src/app/core/store';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent {
  @Input() userListData!: ListData;

  allComplete: boolean = false;

  constructor(private changeData: ChangeDataService) {}

  updateAllComplete(): void {
    this.allComplete =
      this.userListData.users != null &&
      this.userListData.users.every(t => t.completed);

    this.updateSelecedUsers();
  }

  someComplete(): boolean {
    return (
      this.userListData.users.filter(t => t.completed).length > 0 &&
      !this.allComplete
    );
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
