import { Injectable } from '@angular/core';
import { SortedActions } from '../store/models/types';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  sorted: string = '';

  setSortingData(val: string): void {
    switch (val) {
      case SortedActions.ALPHABET:
        this.sorted = val;
        return;
      case SortedActions.MAIL:
        this.sorted = val;
        return;
      case SortedActions.PHONE:
        this.sorted = val;
        return;
      default:
        this.sorted = '';
    }
  }

  getSortedTitle(): string {
    return this.sorted;
  }
}
