import { Component } from '@angular/core';

import { FilterNameService } from 'src/app/core/services';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
})
export class TableFilterComponent {
  filterByTitle: string = '';

  constructor(private filterName: FilterNameService) {}

  onTitleSort(): void {
    this.filterName.setNameSort(this.filterByTitle);
  }
}
