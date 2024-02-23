import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TableData } from '../store';

@Injectable({
  providedIn: 'root',
})
export class RequestApiService {
  link: string = 'https://test-data.directorix.cloud/task1';

  constructor(private http: HttpClient) {}

  getUsersInfo(): Observable<TableData> {
    return this.http.get<TableData>(this.link);
  }
}
