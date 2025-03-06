import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API } from '../constants/api.constants';
import { LoginRequest } from '../models/auth.interface';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post(AUTH_API.auth.login, credentials);
  }

  register(user: any): Observable<any> {
    return this.http.post(AUTH_API.auth.register, user);
  }

  me(): Observable<User> {
    return this.http.get<User>(AUTH_API.auth.me);
  }
}
