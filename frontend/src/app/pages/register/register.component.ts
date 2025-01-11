import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../stores/auth/auth.actions';
import { authFeature } from '../../stores/auth/auth.reducer';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold">Inscription</h1>
      <p class="text-gray-600">Créez votre compte</p>
    </div>

    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Nom d'utilisateur</label
        >
        <input
          type="text"
          formControlName="username"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          formControlName="email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Mot de passe</label
        >
        <input
          type="password"
          formControlName="password"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div class="flex flex-col gap-4">
        <button
          type="submit"
          [disabled]="registerForm.invalid || (loading$ | async)"
          class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
        >
          @if (loading$ | async) { Chargement... } @else { S'inscrire }
        </button>

        <a
          routerLink="/auth/login"
          class="text-center text-sm text-primary-600 hover:text-primary-500"
        >
          Déjà un compte ? Se connecter
        </a>
      </div>
    </form>
  `,
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store);

  loading$ = this.store.select(authFeature.selectLoading);

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.store.dispatch(
        AuthActions.register({
          request: this.registerForm.value as {
            username: string;
            email: string;
            password: string;
          },
        })
      );
    }
  }
}
