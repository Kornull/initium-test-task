import { Component } from '@angular/core';
import { tap } from 'rxjs';

import { FilterNameService, ChangeDataService } from 'src/app/core/services';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
})
export class TableFilterComponent {
  filterByTitle: string = '';

  isDisabledFilter: boolean = true;

  constructor(
    private filterName: FilterNameService,
    private changeData: ChangeDataService
  ) {
    changeData.clients$
      .pipe(
        tap(clientsList => (this.isDisabledFilter = clientsList.length === 0))
      )
      .subscribe();
  }

  onTitleSort(): void {
    this.filterName.setNameSort(this.filterByTitle);
  }
}
