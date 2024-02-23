import { Pipe, PipeTransform } from '@angular/core';
import { ChangeDataService } from 'src/app/core/services';

import { ListData, SortedActions, UserInfo } from 'src/app/core/store';

@Pipe({
  name: 'sortingPipe',
})
export class SortingPipe implements PipeTransform {
  constructor(private cangeData: ChangeDataService) {}

  transform(data: ListData, sort: string = ''): ListData {
    switch (sort) {
      case SortedActions.ALPHABET:
        return {
          ...data,
          users: data.users.sort((a: UserInfo, b: UserInfo) =>
            a.name > b.name ? 1 : -1
          ),
        };
      case SortedActions.PHONE:
        return {
          ...data,
          users: data.users.sort((a: UserInfo, b: UserInfo) => {
            return a.phone > b.phone ? 1 : -1;
          }),
        };
      case SortedActions.MAIL:
        return {
          ...data,
          users: data.users.sort((a: UserInfo, b: UserInfo) =>
            a.email > b.email ? 1 : -1
          ),
        };
      default:
        return {
          ...data,
          users: [...this.cangeData.geClients()],
        };
    }
  }
}
