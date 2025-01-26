import { Injectable, inject } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private alertService = inject(TuiAlertService);

  showError(message: string) {
    this.alertService
      .open(message, {
        label: 'Erreur',
        autoClose: 5000,
      })
      .subscribe();
  }

  showSuccess(message: string) {
    this.alertService
      .open(message, {
        label: 'Succès',
        autoClose: 3000,
      })
      .subscribe();
  }
}
