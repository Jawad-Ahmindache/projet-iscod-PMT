import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';
import { MainStore } from '../../services/store/main.store';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  private alertService = inject(TuiAlertService);
  private store = inject(MainStore);

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

    effect(() => {
      const success = this.store.success;
      if (success) {
        this.alertService
          .open(success, {
            label: 'Succès',
            appearance: 'success',
            autoClose: 3000,
          })
          .subscribe();
      }
    });
  }
}
