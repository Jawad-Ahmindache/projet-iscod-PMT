import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../stores/auth/auth.actions';
import { authFeature } from '../../stores/auth/auth.reducer';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputComponent } from '../../ui/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonComponent,
    InputComponent,
  ],
  template: `
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold">Connexion</h1>
      <p class="text-gray-600">Connectez-vous à votre compte</p>
    </div>

    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-4">
      <app-input
        label="Nom d'utilisateur"
        type="text"
        formControlName="username"
        [hasError]="
          !!(
            loginForm.get('username')?.errors &&
            loginForm.get('username')?.touched
          )
        "
        errorMessage="Le nom d'utilisateur est requis"
      />

      <app-input
        label="Mot de passe"
        type="password"
        formControlName="password"
        [hasError]="
          !!(
            loginForm.get('password')?.errors &&
            loginForm.get('password')?.touched
          )
        "
        errorMessage="Le mot de passe est requis"
      />

      <div class="flex flex-col gap-4">
        <app-button
          type="submit"
          [isDisabled]="loginForm.invalid"
          [isLoading]="!!(loading$ | async)"
        >
          Se connecter
        </app-button>

        <a
          routerLink="/auth/register"
          class="text-center text-sm text-primary-600 hover:text-primary-500"
        >
          Pas encore de compte ? S'inscrire
        </a>
      </div>
    </form>
  `,
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store);

  loading$ = this.store.select(authFeature.selectLoading);

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(
        AuthActions.login({
          request: this.loginForm.value as {
            username: string;
            password: string;
          },
        })
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
