import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API } from '../constants/api.constants';
import { User } from '../models/user.interface';

export interface UpdateAccountRequest {
  email?: string;
  username?: string;
  password?: string;
  currentPassword: string;
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);

  getAccount(): Observable<User> {
    return this.http.get<User>(AUTH_API.account.get);
  }

  updateAccount(data: UpdateAccountRequest): Observable<User> {
    return this.http.put<User>(AUTH_API.account.update, data);
  }
}
