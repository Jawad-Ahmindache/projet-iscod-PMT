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
  selector: 'app-register',
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
      <h1 class="text-2xl font-bold">Inscription</h1>
      <p class="text-gray-600">Créez votre compte</p>
    </div>

    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-4">
      <app-input
        label="Nom d'utilisateur"
        type="text"
        formControlName="username"
        [hasError]="
          !!(
            registerForm.get('username')?.errors &&
            registerForm.get('username')?.touched
          )
        "
        errorMessage="Le nom d'utilisateur doit contenir au moins 3 caractères"
      />

      <app-input
        label="Email"
        type="email"
        formControlName="email"
        [hasError]="
          !!(
            registerForm.get('email')?.errors &&
            registerForm.get('email')?.touched
          )
        "
        errorMessage="L'email n'est pas valide"
      />

      <app-input
        label="Mot de passe"
        type="password"
        formControlName="password"
        [hasError]="
          !!(
            registerForm.get('password')?.errors &&
            registerForm.get('password')?.touched
          )
        "
        errorMessage="Le mot de passe doit contenir au moins 6 caractères"
      />

      <div class="flex flex-col gap-4">
        <app-button
          type="submit"
          [isDisabled]="registerForm.invalid"
          [isLoading]="!!(loading$ | async)"
        >
          S'inscrire
        </app-button>

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
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
