import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskHistory } from '../../../models/task-history.model';

@Component({
  selector: 'app-task-history-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="history-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Utilisateur</th>
            <th>Modification</th>
          </tr>
        </thead>
        <tbody>
          @for (entry of history; track entry.id) {
          <tr>
            <td>{{ entry.changedAt | date : 'dd/MM/yyyy HH:mm' }}</td>
            <td>{{ entry.changedByUsername }}</td>
            <td>{{ entry.changeDescription }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [
    `
      .history-table {
        width: 100%;
        overflow-x: auto;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
      }

      th,
      td {
        padding: 0.75rem;
        text-align: left;
        border-bottom: 1px solid #eee;
      }

      th {
        background-color: #f8f9fa;
        font-weight: 600;
      }

      tr:hover {
        background-color: #f8f9fa;
      }
    `,
  ],
})
export class TaskHistoryTableComponent {
  @Input() history: TaskHistory[] = [];
}
