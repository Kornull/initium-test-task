import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ChangeDataService, SortingService } from 'src/app/core/services';

@Component({
  selector: 'app-table-sort',
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.scss'],
})
export class TableSortComponent {
  selected: string = 'default';

  isDisabledSorting: boolean = true;

  constructor(
    private sortingService: SortingService,
    private changeData: ChangeDataService
  ) {
    changeData.clients$
      .pipe(
        tap(clientsList => (this.isDisabledSorting = clientsList.length === 0))
      )
      .subscribe();
  }

  changeSelect() {
    this.sortingService.setSortingData(this.selected);
  }
}
