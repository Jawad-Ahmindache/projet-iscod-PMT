import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { authFeature } from '../../stores/auth/auth.reducer';
import { AlertComponent } from '../../ui/alert/alert.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, AlertComponent, AsyncPipe],
  template: `
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <router-outlet />
      </div>
      @if (error$ | async; as error) {
      <app-alert [message]="error" type="error" />
      }
    </div>
  `,
})
export class AuthLayoutComponent {
  private store = inject(Store);
  error$ = this.store.select(authFeature.selectError);
}
