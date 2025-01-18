import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainStore {
  private readonly _error = signal<string | null>(null);
  private readonly _success = signal<string | null>(null);

  readonly error = computed(() => this._error());
  readonly success = computed(() => this._success());

  setError(error: string | null) {
    this._error.set(error);
  }

  setSuccess(message: string | null) {
    this._success.set(message);
  }

  clearMessages() {
    this._error.set(null);
    this._success.set(null);
  }
}
