import { Injectable } from '@angular/core';

import { LocalStorageKeys, UserInfo } from '../store';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  clients: UserInfo[] = [];

  getClientsByLocalStore(): UserInfo[] {
    const clientsList = localStorage.getItem(LocalStorageKeys.CLIENTS_KEY);
    if (clientsList !== null) {
      this.clients = JSON.parse(clientsList);
      return this.clients;
    }
    return this.clients;
  }

  setClientsToLocalStore(listClients: UserInfo[]) {
    this.clients = listClients;
    localStorage.setItem(
      LocalStorageKeys.CLIENTS_KEY,
      JSON.stringify(listClients)
    );
  }
}
