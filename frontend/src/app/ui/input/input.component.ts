import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  template: `
    <div class="input-group">
      <label [for]="id" class="label">{{ label }}</label>
      <input
        [type]="type"
        [id]="id"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onBlur()"
        [class]="hasError ? 'input error' : 'input'"
        [placeholder]="placeholder"
      />
      @if (hasError && errorMessage) {
      <span class="error-message">{{ errorMessage }}</span>
      }
    </div>
  `,
  styles: [
    `
      .input-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1);
      }

      .label {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--gray-700);
      }

      .input {
        padding: var(--spacing-2);
        border: 1px solid var(--gray-300);
        border-radius: var(--rounded-md);
        font-size: var(--text-sm);
        transition: all 0.3s ease;
        width: 100%;
        background-color: white;
      }

      .input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 1px var(--primary);
      }

      .input.error {
        border-color: var(--error);
      }

      .input.error:focus {
        box-shadow: 0 0 0 1px var(--error);
      }

      .input:disabled {
        background-color: var(--gray-100);
        cursor: not-allowed;
      }

      .error-message {
        font-size: var(--text-xs);
        color: var(--error);
        margin-top: var(--spacing-1);
      }
    `,
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() hasError = false;
  @Input() errorMessage = '';
  @Input() isDisabled = false;

  id = `input-${Math.random().toString(36).substr(2, 9)}`;
  value = '';
  touched = false;
  disabled = false;

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.isDisabled = isDisabled;
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.touched = true;
    this.onTouched();
  }
}
