import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface DropdownItem {
  label: string;
  value: any;
  icon?: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dropdown" [class.active]="isOpen">
      <button class="dropdown-trigger" (click)="toggle()" type="button">
        {{ label }}
        <span class="arrow">▼</span>
      </button>

      <div class="dropdown-menu" *ngIf="isOpen">
        <div
          *ngFor="let item of items"
          class="dropdown-item"
          (click)="selectItem(item)"
        >
          <span class="icon" *ngIf="item.icon">{{ item.icon }}</span>
          {{ item.label }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dropdown.styles.scss'],
})
export class DropdownComponent {
  @Input() label = 'Select';
  @Input() items: DropdownItem[] = [];
  @Output() selected = new EventEmitter<DropdownItem>();

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: DropdownItem) {
    this.selected.emit(item);
    this.isOpen = false;
  }
}
