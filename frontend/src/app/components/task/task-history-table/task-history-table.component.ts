import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskHistory } from '../../../models/task-history.model';

@Component({
  selector: 'app-task-history-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-history-table.component.html',
  styleUrls: ['./task-history-table.component.scss'],
})
export class TaskHistoryTableComponent {
  @Input() history: TaskHistory[] = [];
}
