import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButton, TuiError } from '@taiga-ui/core';
import { TuiButtonLoading } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/legacy';
import { AccountService } from '../../services/account.service';
import { AuthStore } from '../../services/store/auth.store';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiButton,
    TuiButtonLoading,
    TuiError,
    TuiInputModule,
  ],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  protected store = inject(AuthStore);
  private accountService = inject(AccountService);
  private fb = inject(FormBuilder);

  accountForm = this.fb.group({
    username: ['', [Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.email]],
    password: ['', [Validators.minLength(6), Validators.maxLength(40)]],
    currentPassword: ['', [Validators.required]],
  });

  error: string | null = null;
  success: string | null = null;
  loading = false;

  constructor() {
    const user = this.store.user;
    if (user) {
      this.accountForm.patchValue({
        username: user.username,
        email: user.email,
      });
    }
  }

  onSubmit() {
    if (this.accountForm.valid) {
      const formValue = this.accountForm.value;
      const updateData = {
        currentPassword: formValue.currentPassword!,
        ...(formValue.username && { username: formValue.username }),
        ...(formValue.email && { email: formValue.email }),
        ...(formValue.password && { password: formValue.password }),
      };

      this.error = null;
      this.success = null;
      this.loading = true;

      this.accountService.updateAccount(updateData).subscribe({
        next: (user) => {
          this.store.setAuth({ token: this.store.token!, user });
          this.success = 'Votre compte a été mis à jour avec succès';
          this.accountForm.get('currentPassword')?.reset();
          this.accountForm.get('password')?.reset();
          this.loading = false;
        },
        error: (err) => {
          this.error =
            err.error.message ||
            'Une erreur est survenue lors de la mise à jour';
          this.loading = false;
        },
      });
    } else {
      this.accountForm.markAllAsTouched();
    }
  }
}
