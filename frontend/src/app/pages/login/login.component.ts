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
  selector: 'app-login',
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
    <section class="login-container flex flex-col items-center justify-center">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold">Connexion</h1>
        <p class="text-gray-600">Connectez-vous à votre compte</p>
      </div>

      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-4">
        <div class="tui-form__row">
          <tui-input formControlName="email">
            Email
            <input tuiTextfieldLegacy type="email" />
          </tui-input>
          @if (loginForm.get('email')?.errors &&
          loginForm.get('email')?.touched) {
          <tui-error>L'email est requis</tui-error>
          }
        </div>

        <div class="tui-form__row">
          <tui-input formControlName="password">
            Mot de passe
            <input tuiTextfieldLegacy type="password" />
          </tui-input>
          @if (loginForm.get('password')?.errors &&
          loginForm.get('password')?.touched) {
          <tui-error>Le mot de passe est requis</tui-error>
          }
        </div>

        <div class="flex flex-col gap-4">
          <button
            tuiButton
            type="submit"
            appearance="primary"
            [loading]="store.loading"
            [disabled]="loginForm.invalid"
            class="tui-form__button"
          >
            Se connecter
          </button>

          <a
            routerLink="/auth/register"
            class="text-center text-sm text-tui-text-02 hover:text-tui-text-01"
          >
            Pas encore de compte ? S'inscrire
          </a>
        </div>
      </form>
    </section>
  `,
  styles: [
    `
      .login-container {
        height: 100vh;
      }
      .login-container form {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }
    `,
  ],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  protected store = inject(AuthStore);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      const request = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };

      this.store.setLoading(true);
      this.authService
        .login(
          request as {
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
      this.loginForm.markAllAsTouched();
    }
  }
}
