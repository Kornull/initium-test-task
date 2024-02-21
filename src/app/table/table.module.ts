import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';

import { SharedModule } from '../shared/shared.module';
import { TableBtnsComponent } from './components/table-btns/table-btns.component';

@NgModule({
  declarations: [TableComponent, TableBtnsComponent],
  imports: [CommonModule, SharedModule],
  exports: [TableComponent],
})
export class TableModule {}
