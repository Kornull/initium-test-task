import { ChangeDataService } from 'src/app/core/services';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit, OnDestroy {
  selectedUsersListSubscriber$!: Subscription;

  countSelectedUsers: number = 0;

  constructor(
    public dialog: MatDialog,
    private changeData: ChangeDataService
  ) {}

  ngOnInit(): void {
    this.selectedUsersListSubscriber$ = this.changeData.selectedUsers$
      .pipe(
        tap(user => {
          this.countSelectedUsers = user.length;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.selectedUsersListSubscriber$.unsubscribe();
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  removeClients(): void {
    this.changeData.removeSelectedUsers();
    this.closeModal();
  }
}
