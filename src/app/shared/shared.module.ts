import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { FilterNamePipe } from './pipes/filter-name.pipe';
import { SortingPipe } from './pipes/sorting.pipe';

@NgModule({
  declarations: [FilterNamePipe, SortingPipe],
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule,
  ],
  exports: [
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    FilterNamePipe,
    SortingPipe,
  ],
})
export class SharedModule {}
