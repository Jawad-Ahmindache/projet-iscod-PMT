import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectMember } from '../../../models/project-member.model';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.model';
import { ProjectMemberService } from '../../../services/project-member.service';
import { TaskService } from '../../../services/task.service';
import { ModalComponent } from '../../shared/modal/modal.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent, TaskDetailComponent],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Input() members: ProjectMember[] = [];
  @Output() taskUpdated = new EventEmitter<void>();

  private projectMemberService = inject(ProjectMemberService);
  private taskService = inject(TaskService);

  readonly TaskStatus = TaskStatus;
  readonly TaskPriority = TaskPriority;

  showDetailModal = false;

  onAssigneeChange(assigneeId: number | null): void {
    this.taskService
      .assignTask(this.task.projectId, this.task.id, assigneeId ?? undefined)
      .subscribe(() => {
        this.taskUpdated.emit();
      });
  }

  onPriorityChange(priority: TaskPriority): void {
    this.taskService
      .updateTaskPriority(this.task.projectId, this.task.id, priority)
      .subscribe(() => {
        this.taskUpdated.emit();
      });
  }

  onStatusChange(status: TaskStatus): void {
    this.taskService
      .updateTaskStatus(this.task.projectId, this.task.id, status)
      .subscribe(() => {
        this.taskUpdated.emit();
      });
  }

  onMouseEnter(): void {
    this.projectMemberService
      .getProjectMembers(this.task.projectId)
      .subscribe((members) => {
        this.members = members;
      });
  }

  getStatusActions(): { label: string; status: TaskStatus }[] {
    switch (this.task.status) {
      case TaskStatus.TODO:
        return [{ label: 'Commencer', status: TaskStatus.IN_PROGRESS }];
      case TaskStatus.IN_PROGRESS:
        return [
          { label: 'Terminer', status: TaskStatus.COMPLETED },
          { label: 'Remettre à faire', status: TaskStatus.TODO },
        ];
      case TaskStatus.COMPLETED:
        return [{ label: 'Rouvrir', status: TaskStatus.TODO }];
      default:
        return [];
    }
  }

  openDetailModal(): void {
    this.showDetailModal = true;
  }

  closeDetailModal(): void {
    this.showDetailModal = false;
  }

  isOverdue(): boolean {
    if (!this.task.dueDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(this.task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today && this.task.status !== TaskStatus.COMPLETED;
  }
}
