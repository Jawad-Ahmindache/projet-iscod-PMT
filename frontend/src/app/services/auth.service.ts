import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API } from '../constants/api.constants';
import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from '../models/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(AUTH_API.auth.login, request);
  }

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(AUTH_API.auth.register, request);
  }

  getCurrentUser(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(AUTH_API.auth.me);
  }
}
