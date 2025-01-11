import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption<T = any> {
  value: T;
  label: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="select-container">
      <label *ngIf="label" class="text-sm">{{ label }}</label>
      <select [(ngModel)]="value" [disabled]="disabled" [class]="size">
        <option value="" disabled selected *ngIf="placeholder">
          {{ placeholder }}
        </option>
        <option *ngFor="let option of options" [value]="option.value">
          {{ option.label }}
        </option>
      </select>
      <small class="error text-xs" *ngIf="error">{{ error }}</small>
    </div>
  `,
  styles: [
    `
      .select-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2);
      }

      label {
        font-weight: 500;
        color: var(--text);
      }

      select {
        padding: var(--spacing-2);
        border: 1px solid var(--text-light);
        border-radius: var(--rounded-md);
        font-size: var(--text-sm);
        background-color: var(--fond-1);
        color: var(--text);
        transition: border-color 0.3s ease;
        cursor: pointer;
      }

      select:focus {
        outline: none;
        border-color: var(--primary);
      }

      select:disabled {
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
export class SelectComponent<T = any> {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() options: SelectOption<T>[] = [];
  @Input() error = '';
  @Input() size: SelectSize = 'md';
  @Input() disabled = false;

  value: T | null = null;
}
