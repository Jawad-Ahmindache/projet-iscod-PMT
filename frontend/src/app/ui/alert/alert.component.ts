import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type AlertType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="alert" [class]="type" role="alert">
      <div class="flex items-center gap-2">
        <span class="icon" *ngIf="type === 'success'">✓</span>
        <span class="icon" *ngIf="type === 'error'">✕</span>
        <span class="icon" *ngIf="type === 'warning'">!</span>
        <span class="icon" *ngIf="type === 'info'">i</span>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./alert.styles.scss'],
})
export class AlertComponent {
  @Input() type: AlertType = 'info';
}
