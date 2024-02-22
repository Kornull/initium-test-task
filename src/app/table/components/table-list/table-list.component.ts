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

  updateAllComplete() {
    this.allComplete =
      this.userListData.users != null &&
      this.userListData.users.every(t => t.completed);
  }

  someComplete(): boolean {
    return (
      this.userListData.users.filter(t => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    this.userListData.users = this.userListData.users.map((user: UserInfo) => {
      return {
        ...user,
        completed,
      };
    });
  }
}
