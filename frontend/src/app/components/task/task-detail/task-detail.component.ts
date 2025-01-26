import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskHistory } from '../../../models/task-history.model';
import { Task, TaskPriority } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';
import { TaskHistoryTableComponent } from '../task-history-table/task-history-table.component';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskHistoryTableComponent],
  template: `
    <div class="task-detail">
      <div class="form-group">
        <label>Nom</label>
        <input type="text" [(ngModel)]="task.name" (blur)="onNameChange()" />
      </div>

      <div class="form-group">
        <label>Description</label>
        <textarea
          [(ngModel)]="task.description"
          (blur)="onDescriptionChange()"
        ></textarea>
      </div>

      <div class="form-group">
        <label>Priorité</label>
        <div class="priority-options">
          @for (priority of priorities; track priority) {
          <label class="priority-option">
            <input
              type="radio"
              [value]="priority"
              [checked]="task.priority === priority"
              (change)="onPriorityChange(priority)"
            />
            <span class="priority-label {{ priority.toLowerCase() }}">
              {{ getPriorityLabel(priority) }}
            </span>
          </label>
          }
        </div>
      </div>

      <div class="form-group">
        <label>Date d'échéance</label>
        <input
          type="date"
          [ngModel]="task.dueDate | date : 'yyyy-MM-dd'"
          (ngModelChange)="onDueDateChange($event)"
        />
      </div>

      <h3>Historique des modifications</h3>
      <app-task-history-table [history]="history"></app-task-history-table>
    </div>
  `,
  styles: [
    `
      .task-detail {
        padding: 1rem;
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }

      input[type='text'],
      input[type='date'],
      textarea {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
      }

      textarea {
        min-height: 100px;
        resize: vertical;
      }

      .priority-options {
        display: flex;
        gap: 1rem;
      }

      .priority-option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
      }

      .priority-label {
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
      }

      .priority-label.low {
        background-color: #e9ecef;
      }

      .priority-label.medium {
        background-color: #fff3cd;
      }

      .priority-label.high {
        background-color: #f8d7da;
      }

      h3 {
        margin: 2rem 0 1rem;
      }
    `,
  ],
})
export class TaskDetailComponent {
  @Input() task!: Task;
  @Output() taskUpdated = new EventEmitter<void>();

  private taskService = inject(TaskService);
  history: TaskHistory[] = [];
  priorities = Object.values(TaskPriority);

  ngOnInit() {
    this.loadHistory();
  }

  loadHistory() {
    this.taskService
      .getTaskHistory(this.task.projectId, this.task.id)
      .subscribe((history) => {
        this.history = history;
      });
  }

  onNameChange() {
    this.taskService
      .updateTask(this.task.projectId, this.task.id, { name: this.task.name })
      .subscribe(() => {
        this.taskUpdated.emit();
        this.loadHistory();
      });
  }

  onDescriptionChange() {
    this.taskService
      .updateTask(this.task.projectId, this.task.id, {
        description: this.task.description,
      })
      .subscribe(() => {
        this.taskUpdated.emit();
        this.loadHistory();
      });
  }

  onPriorityChange(priority: TaskPriority) {
    this.taskService
      .updateTaskPriority(this.task.projectId, this.task.id, priority)
      .subscribe(() => {
        this.taskUpdated.emit();
        this.loadHistory();
      });
  }

  onDueDateChange(date: string) {
    this.taskService
      .updateTask(this.task.projectId, this.task.id, { dueDate: date })
      .subscribe(() => {
        this.taskUpdated.emit();
        this.loadHistory();
      });
  }

  getPriorityLabel(priority: TaskPriority): string {
    switch (priority) {
      case TaskPriority.LOW:
        return 'Basse';
      case TaskPriority.MEDIUM:
        return 'Moyenne';
      case TaskPriority.HIGH:
        return 'Haute';
    }
  }
}
