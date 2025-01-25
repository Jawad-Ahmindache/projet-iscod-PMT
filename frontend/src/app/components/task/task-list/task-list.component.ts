import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProjectMember } from '../../../models/project-member.model';
import { Task, TaskStatus } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() projectId!: number;
  @Input() members: ProjectMember[] = [];

  private taskService = inject(TaskService);
  private fb = inject(FormBuilder);

  tasks: Task[] = [];
  showCreateForm = false;

  taskForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
    dueDate: ['', Validators.required],
    priority: [0, [Validators.required]],
  });

  readonly TaskStatus = TaskStatus;

  ngOnInit(): void {
    this.loadTasks();
  }

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.tasks.filter((task) => task.status === status);
  }

  onTaskStatusChange(task: Task, newStatus: TaskStatus): void {
    this.taskService
      .updateTaskStatus(this.projectId, task.id, newStatus)
      .subscribe(() => {
        this.loadTasks();
      });
  }

  onTaskUpdated(): void {
    this.loadTasks();
  }

  toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
    if (!this.showCreateForm) {
      this.taskForm.reset({ priority: 0 });
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.taskService
        .createTask(this.projectId, this.taskForm.value)
        .subscribe(() => {
          this.loadTasks();
          this.toggleCreateForm();
        });
    }
  }

  private loadTasks(): void {
    this.taskService
      .getProjectTasks(this.projectId)
      .subscribe((tasks) => (this.tasks = tasks));
  }
}
