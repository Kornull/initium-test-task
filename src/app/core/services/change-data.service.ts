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

  getClients(): UserInfo[] {
    return this.clientsInfo;
  }

  updateClientsList(clientsList: UserInfo[]): void {
    this.clientsInfo = clientsList;

    this.changeList(this.clientsInfo);
  }

  addUser(user: UserInfo): void {
    this.clientsInfo = [...this.clientsInfo, user];

    this.changeList(this.clientsInfo);
  }

  updateClientInfo(userNewData: UserInfo): void {
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

  setSelecteUsers(users: UserInfo[]): void {
    this.clientsInfo = [...users];
    this.selectedUsers.next([
      ...this.clientsInfo.filter(client => client.completed),
    ]);
  }

  removeSelectedUsers(): void {
    this.clientsInfo = [
      ...this.clientsInfo.filter(client => !client.completed),
    ];

    this.changeList(this.clientsInfo);
  }

  deleteSelectedMarker(): void {
    this.clientsInfo = [
      ...this.clientsInfo.map(client => {
        return {
          ...client,
          completed: false,
        };
      }),
    ];

    this.changeList(this.clientsInfo);
  }

  private changeList(dataList: UserInfo[]): void {
    this.clients.next(dataList);
    this.selectedUsers.next([]);
    this.storeService.setClientsToLocalStore(dataList);
  }
}
