import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      [class]="'btn ' + variant + ' ' + size"
      [disabled]="disabled"
      (click)="onClick.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-2) var(--spacing-4);
        border-radius: var(--rounded-md);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: var(--text-sm);
        font-weight: 500;
        gap: var(--spacing-2);
      }

      .primary {
        background-color: var(--primary);
        color: white;
      }

      .primary:hover:not(:disabled) {
        background-color: var(--primary-hover);
      }

      .secondary {
        background-color: var(--secondary);
        color: white;
      }

      .secondary:hover:not(:disabled) {
        background-color: var(--secondary-hover);
      }

      .outline {
        background-color: transparent;
        border: 2px solid var(--primary);
        color: var(--primary);
      }

      .outline:hover:not(:disabled) {
        background-color: var(--primary);
        color: white;
      }

      .sm {
        padding: var(--spacing-1) var(--spacing-2);
        font-size: var(--text-xs);
      }

      .md {
        padding: var(--spacing-2) var(--spacing-4);
        font-size: var(--text-sm);
      }

      .lg {
        padding: var(--spacing-3) var(--spacing-6);
        font-size: var(--text-md);
      }

      button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<MouseEvent>();
}
