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

@NgModule({
  declarations: [
    TableComponent,
    TableBtnsComponent,
    TableListComponent,
    TableListHeaderComponent,
    TableListItemComponent,
    TableFilterComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [TableComponent],
})
export class TableModule {}
