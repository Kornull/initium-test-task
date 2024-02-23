import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { LocalStoreService } from './local-store.service';

import { UserInfo } from '../store';

@Injectable({
  providedIn: 'root',
})
export class ChangeDataService {
  private clients = new Subject<UserInfo[]>();

  private selectedUsers = new BehaviorSubject<UserInfo[]>([]);

  clients$ = this.clients.asObservable();

  selectedUsers$ = this.selectedUsers.asObservable();

  clientsInfo: UserInfo[] = [];

  constructor(private storeService: LocalStoreService) {}

  getClients() {
    return this.clientsInfo;
  }

  updateClientsList(clientsList: UserInfo[]) {
    this.clientsInfo = clientsList;

    this.changeList(this.clientsInfo);
  }

  addUser(user: UserInfo) {
    this.clientsInfo = [...this.clientsInfo, user];

    this.changeList(this.clientsInfo);
  }

  updateClientInfo(userNewData: UserInfo) {
    this.clientsInfo = this.clientsInfo.map((user: UserInfo) => {
      if (user.id === userNewData.id) {
        return {
          name: userNewData.name,
          surname: userNewData.surname,
          email: userNewData.email,
          phone: userNewData.phone,
          id: userNewData.id,
          completed: userNewData.completed,
        };
      }
      return user;
    });
    this.changeList(this.clientsInfo);
  }

  setSelecteUsers(users: UserInfo[]) {
    this.clientsInfo = [...users];
    this.selectedUsers.next([
      ...this.clientsInfo.filter(client => client.completed),
    ]);
  }

  removeSelectedUsers() {
    this.clientsInfo = [
      ...this.clientsInfo.filter(client => !client.completed),
    ];

    this.changeList(this.clientsInfo);
  }

  private changeList(dataList: UserInfo[]) {
    this.clients.next(dataList);
    this.storeService.setClientsToLocalStore(dataList);
  }
}
