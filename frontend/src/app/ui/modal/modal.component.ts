import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" *ngIf="isOpen" (click)="close()">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">{{ title }}</h3>
          <button class="close-button" (click)="close()">✕</button>
        </div>

        <div class="modal-content">
          <ng-content></ng-content>
        </div>

        <div class="modal-footer" *ngIf="showFooter">
          <button class="cancel-button" *ngIf="showCancel" (click)="close()">
            {{ cancelText }}
          </button>
          <button
            class="confirm-button"
            *ngIf="showConfirm"
            (click)="confirm()"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.styles.scss'],
})
export class ModalComponent {
  @Input() title = '';
  @Input() isOpen = false;
  @Input() showFooter = true;
  @Input() showCancel = true;
  @Input() showConfirm = true;
  @Input() cancelText = 'Annuler';
  @Input() confirmText = 'Confirmer';

  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }

  confirm() {
    this.confirmed.emit();
  }
}
