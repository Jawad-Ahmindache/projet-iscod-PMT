import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type AlertType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="alert" [ngClass]="type" role="alert">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .alert {
        padding: var(--spacing-3);
        border-radius: var(--rounded-md);
        margin-bottom: var(--spacing-4);
      }

      .success {
        background-color: var(--success-light);
        color: var(--success);
        border: 1px solid var(--success);
      }

      .error {
        background-color: var(--error-light);
        color: var(--error);
        border: 1px solid var(--error);
      }

      .warning {
        background-color: var(--warning-light);
        color: var(--warning);
        border: 1px solid var(--warning);
      }

      .info {
        background-color: var(--info-light);
        color: var(--info);
        border: 1px solid var(--info);
      }
    `,
  ],
})
export class AlertComponent {
  @Input({ required: true }) type: AlertType = 'info';
  @Input() message = '';
}
