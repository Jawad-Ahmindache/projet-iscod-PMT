import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse, User } from '../../models/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private readonly tokenKey = 'token';
  private readonly userKey = 'user';

  private _loading = signal(false);
  private _error = signal<string | null>(null);
  private _user = signal<User | null>(this.getUserFromStorage());
  private _token = signal<string | null>(this.getTokenFromStorage());

  constructor(private router: Router) {}

  get loading() {
    return this._loading();
  }

  get error() {
    return this._error();
  }

  get user() {
    return this._user();
  }

  get token() {
    return this._token();
  }

  get isAuthenticated() {
    return !!this._token();
  }

  setLoading(loading: boolean) {
    this._loading.set(loading);
  }

  setError(error: string | null) {
    this._error.set(error);
    if (error) {
      setTimeout(() => this._error.set(null), 3000);
    }
  }

  setAuth(response: AuthResponse) {
    localStorage.setItem(this.tokenKey, response.token);
    localStorage.setItem(this.userKey, JSON.stringify(response.user));
    this._token.set(response.token);
    this._user.set(response.user);
  }

  clearAuth() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this._token.set(null);
    this._user.set(null);
    this.router.navigate(['/auth/login']);
  }

  private getTokenFromStorage(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private getUserFromStorage(): User | null {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }
}
