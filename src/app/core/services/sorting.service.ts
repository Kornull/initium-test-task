import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  sorted: string = '';

  setSortingData(val: string): void {
    if (val.length) {
      this.sorted = val;
    } else {
      this.sorted = '';
    }
  }

  getSortedTitle(): string {
    return this.sorted;
  }
}
