import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FormKeys } from 'src/app/core/store';
import {
  DeleteUserComponent,
  TableFormComponent,
} from 'src/app/shared/components';

@Component({
  selector: 'app-table-btns',
  templateUrl: './table-btns.component.html',
  styleUrls: ['./table-btns.component.scss'],
})
export class TableBtnsComponent {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {
    iconRegistry.addSvgIcon(
      'delete-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg')
    );
    iconRegistry.addSvgIcon(
      'add-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg')
    );
  }

  createUser() {
    this.dialog.open(TableFormComponent, {
      data: {
        formKey: FormKeys.CREATE_FORM_KEY,
      },
    });
  }

  removeUser() {
    this.dialog.open(DeleteUserComponent);
  }
}
