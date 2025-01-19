import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';
import { AuthStore } from '../../services/store/auth.store';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div
      class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
})
export class AuthLayoutComponent {
  private alertService = inject(TuiAlertService);
  private store = inject(AuthStore);

  constructor() {
    effect(() => {
      const error = this.store.error;
      if (error) {
        this.alertService
          .open(error, {
            label: 'Erreur',
            appearance: 'error',
            autoClose: 5000,
          })
          .subscribe();
      }
    });
  }
}
