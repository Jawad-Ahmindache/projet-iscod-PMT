import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

type InputSize = 'sm' | 'md' | 'lg';
type InputType = 'text' | 'password' | 'email' | 'number';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="input-container">
      <label *ngIf="label" class="text-sm">{{ label }}</label>
      <input
        [type]="type"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [disabled]="disabled"
        [class]="size"
      />
      <small class="error text-xs" *ngIf="error">{{ error }}</small>
    </div>
  `,
  styles: [
    `
      .input-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2);
      }

      label {
        font-weight: 500;
        color: var(--text);
      }

      input {
        padding: var(--spacing-2);
        border: 1px solid var(--text-light);
        border-radius: var(--rounded-md);
        font-size: var(--text-sm);
        background-color: var(--fond-1);
        color: var(--text);
        transition: border-color 0.3s ease;
      }

      input:focus {
        outline: none;
        border-color: var(--primary);
      }

      input:disabled {
        background-color: var(--fond-2);
        cursor: not-allowed;
      }

      .sm {
        padding: var(--spacing-1) var(--spacing-2);
        font-size: var(--text-xs);
      }

      .md {
        padding: var(--spacing-2) var(--spacing-3);
        font-size: var(--text-sm);
      }

      .lg {
        padding: var(--spacing-3) var(--spacing-4);
        font-size: var(--text-md);
      }

      .error {
        color: #e74c3c;
      }
    `,
  ],
})
export class InputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: InputType = 'text';
  @Input() error = '';
  @Input() size: InputSize = 'md';
  @Input() disabled = false;

  value = '';
}
