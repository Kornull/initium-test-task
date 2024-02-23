import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';

import { SharedModule } from '../shared/shared.module';
import {
  TableBtnsComponent,
  TableListComponent,
  TableListHeaderComponent,
  TableListItemComponent,
  TableFilterComponent,
} from './components/table';
import { TableSortComponent } from './components/table/table-sort/table-sort.component';
import { TableFormComponent } from './components/table/table-btns/table-form/table-form.component';

@NgModule({
  declarations: [
    TableComponent,
    TableBtnsComponent,
    TableListComponent,
    TableListHeaderComponent,
    TableListItemComponent,
    TableFilterComponent,
    TableSortComponent,
  ],

  imports: [CommonModule, SharedModule, TableFormComponent],
  exports: [TableComponent],
})
export class TableModule {}
