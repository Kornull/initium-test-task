import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';

import { SharedModule } from '../shared/shared.module';
import { TableBtnsComponent } from './components/table-btns/table-btns.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TableListHeaderComponent } from './components/table-list/table-list-header/table-list-header.component';
import { TableListItemComponent } from './components/table-list/table-list-item/table-list-item.component';

@NgModule({
  declarations: [
    TableComponent,
    TableBtnsComponent,
    TableListComponent,
    TableListHeaderComponent,
    TableListItemComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [TableComponent],
})
export class TableModule {}
