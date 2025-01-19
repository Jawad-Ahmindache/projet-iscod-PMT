import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainStore {
  private _loading = signal(false);
  private _error = signal<string | null>(null);
  private _success = signal<string | null>(null);

  get loading() {
    return this._loading();
  }

  get error() {
    return this._error();
  }

  get success() {
    return this._success();
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

  setSuccess(success: string | null) {
    this._success.set(success);
    if (success) {
      setTimeout(() => this._success.set(null), 3000);
    }
  }
}
