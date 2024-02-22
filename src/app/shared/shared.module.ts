import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { SortingPipe } from './pipes/sorting.pipe';

@NgModule({
  declarations: [FilterNamePipe, SortingPipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    FilterNamePipe,
    SortingPipe,
  ],
})
export class SharedModule {}
