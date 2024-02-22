import { Component } from '@angular/core';
import { SortingService } from 'src/app/core/services';

@Component({
  selector: 'app-table-sort',
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.scss'],
})
export class TableSortComponent {
  selected: string = 'default';

  constructor(private sortingService: SortingService) {}

  changeSelect() {
    this.sortingService.setSortingData(this.selected);
  }
}
