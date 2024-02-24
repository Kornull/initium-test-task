import { Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { TableFormComponent } from 'src/app/shared/components';

import { FormKeys, UserInfo } from 'src/app/core/store';

@Component({
  selector: 'app-table-list-item',
  templateUrl: './table-list-item.component.html',
  styleUrls: ['./table-list-item.component.scss'],
})
export class TableListItemComponent {
  @Input() user!: UserInfo;

  constructor(public dialog: MatDialog) {}

  changeUserData(): void {
    this.dialog.open(TableFormComponent, {
      data: {
        formKey: FormKeys.CHANGE_FORM_KEY,
        completed: this.user.completed,
        email: this.user.email,
        id: this.user.id,
        name: this.user.name,
        phone: this.user.phone,
        surname: this.user.surname,
      },
    });
  }
}
