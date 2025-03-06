import { Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MainStore } from '../../services/store/main.store';
import { ToastService } from '../../services/toast.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  private toastService = inject(ToastService);
  private store = inject(MainStore);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    effect(() => {
      const error = this.store.error;
      if (error) {
        this.toastService.showError(error);
      }
    });

    effect(() => {
      const success = this.store.success;
      if (success) {
        this.toastService.showSuccess(success);
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
