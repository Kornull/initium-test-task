import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterNameService {
  filterByName: string = '';

  setNameSort(searchTitleData: string): void {
    this.filterByName = searchTitleData;
  }

  getFilteredName(): string {
    return this.filterByName;
  }
}
