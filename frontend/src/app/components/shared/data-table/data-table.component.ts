import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface TableAction {
  label: string;
  icon?: string;
  action: (item: any) => void;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  @Input() data: any[] = [];
  @Input() columns: Column[] = [];
  @Input() actions: TableAction[] = [];
  @Input() loading = false;
  @Input() pageSize = 10;
  @Input() currentPage = 1;
  @Input() totalItems = 0;

  @Output() pageChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<{
    key: string;
    direction: 'asc' | 'desc';
  }>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  onSort(column: Column): void {
    if (column.sortable) {
      // Implémentation du tri
      this.sortChange.emit({ key: column.key, direction: 'asc' });
    }
  }
}
