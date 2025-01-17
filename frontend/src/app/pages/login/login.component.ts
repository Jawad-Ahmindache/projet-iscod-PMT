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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
