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
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
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
