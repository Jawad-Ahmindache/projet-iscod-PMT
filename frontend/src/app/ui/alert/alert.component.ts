import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="message()"
      class="fixed top-4 right-4 p-4 rounded-lg text-white"
      [ngClass]="type() === 'error' ? 'bg-red-500' : 'bg-green-500'"
    >
      {{ message() }}
    </div>
  `,
})
export class AlertComponent {
  message = input.required<string>();
  type = input<'error' | 'success'>('error');
}
