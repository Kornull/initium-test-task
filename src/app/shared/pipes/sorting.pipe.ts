import { Pipe, PipeTransform } from '@angular/core';
import { ChangeDataService } from 'src/app/core/services';

import { ListData, SortedActions, UserInfo } from 'src/app/core/store';

@Pipe({
  name: 'sortingPipe',
})
export class SortingPipe implements PipeTransform {
  phoneNum: UserInfo[] = [];

  notPhoneNum: UserInfo[] = [];

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
        this.phoneNum = data.users.filter(user => user.phone.length);
        this.notPhoneNum = data.users.filter(user => !user.phone.length);

        return {
          ...data,
          users: [
            ...this.phoneNum.sort((a: UserInfo, b: UserInfo) => {
              return a.phone > b.phone ? 1 : -1;
            }),
            ...this.notPhoneNum,
          ],
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
          users: [...this.cangeData.getClients()],
        };
    }
  }
}
