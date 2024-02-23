import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LocalStoreService } from './local-store.service';

import { UserInfo } from '../store';

@Injectable({
  providedIn: 'root',
})
export class ChangeDataService {
  private clients = new Subject<UserInfo[]>();

  clients$ = this.clients.asObservable();

  clientsInfo: UserInfo[] = [];

  constructor(private storeService: LocalStoreService) {}

  geClients() {
    return this.clientsInfo;
  }

  updateClients(clientsList: UserInfo[]) {
    this.clientsInfo = clientsList;
    this.clients.next(clientsList);
    this.storeService.setClientsToLocalStore(clientsList);
  }

  addUser(user: UserInfo) {
    this.clientsInfo = [...this.clientsInfo, user];
    this.clients.next([...this.clientsInfo]);
    this.storeService.setClientsToLocalStore(this.clientsInfo);
  }
}
