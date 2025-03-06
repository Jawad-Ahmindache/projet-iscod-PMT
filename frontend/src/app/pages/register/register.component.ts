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
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
