import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TuiButton, TuiError } from '@taiga-ui/core';
import { TuiButtonLoading } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/legacy';
import { catchError, finalize, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AuthStore } from '../../services/store/auth.store';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    TuiButton,
    TuiButtonLoading,
    TuiError,
    TuiInputModule,
  ],
  template: `
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold">Inscription</h1>
      <p class="text-gray-600">Créez votre compte</p>
    </div>

    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-4">
      <div class="tui-form__row">
        <tui-input formControlName="username">
          Nom d'utilisateur
          <input tuiTextfieldLegacy />
        </tui-input>
        @if (registerForm.get('username')?.errors &&
        registerForm.get('username')?.touched) {
        <tui-error
          >Le nom d'utilisateur doit contenir au moins 3 caractères</tui-error
        >
        }
      </div>

      <div class="tui-form__row">
        <tui-input formControlName="email">
          Email
          <input tuiTextfieldLegacy type="email" />
        </tui-input>
        @if (registerForm.get('email')?.errors &&
        registerForm.get('email')?.touched) {
        <tui-error>L'email n'est pas valide</tui-error>
        }
      </div>

      <div class="tui-form__row">
        <tui-input formControlName="password">
          Mot de passe
          <input tuiTextfieldLegacy type="password" />
        </tui-input>
        @if (registerForm.get('password')?.errors &&
        registerForm.get('password')?.touched) {
        <tui-error
          >Le mot de passe doit contenir au moins 6 caractères</tui-error
        >
        }
      </div>

      <div class="flex flex-col gap-4">
        <button
          tuiButton
          type="submit"
          appearance="primary"
          [loading]="store.loading"
          [disabled]="registerForm.invalid"
          class="tui-form__button"
        >
          S'inscrire
        </button>

        <a
          routerLink="/auth/login"
          class="text-center text-sm text-tui-text-02 hover:text-tui-text-01"
        >
          Déjà un compte ? Se connecter
        </a>
      </div>
    </form>
  `,
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  protected store = inject(AuthStore);

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.store.setLoading(true);
      this.authService
        .register(
          this.registerForm.value as {
            username: string;
            email: string;
            password: string;
          }
        )
        .pipe(
          tap((response) => {
            this.store.setAuth(response);
            this.router.navigate(['/']);
          }),
          catchError((error) => {
            this.store.setError(
              error.error.message || 'Une erreur est survenue'
            );
            throw error;
          }),
          finalize(() => this.store.setLoading(false))
        )
        .subscribe();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
