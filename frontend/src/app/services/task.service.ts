import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API } from '../constants/api.constants';
import { TaskHistory } from '../models/task-history.model';
import {
  Task,
  TaskPriority,
  TaskStatus,
  UpdateTaskDto,
} from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);

  getProjectTasks(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(AUTH_API.projects.tasks.list(projectId));
  }

  getTask(projectId: number, taskId: number): Observable<Task> {
    return this.http.get<Task>(AUTH_API.projects.tasks.get(projectId, taskId));
  }

  getTaskHistory(projectId: number, taskId: number): Observable<TaskHistory[]> {
    return this.http.get<TaskHistory[]>(
      AUTH_API.projects.tasks.history(projectId, taskId)
    );
  }

  createTask(projectId: number, task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(
      AUTH_API.projects.tasks.create(projectId),
      task
    );
  }

  updateTask(
    projectId: number,
    taskId: number,
    task: UpdateTaskDto
  ): Observable<Task> {
    return this.http.put<Task>(
      AUTH_API.projects.tasks.update(projectId, taskId),
      task
    );
  }

  updateTaskStatus(
    projectId: number,
    taskId: number,
    status: TaskStatus
  ): Observable<Task> {
    return this.http.put<Task>(
      AUTH_API.projects.tasks.updateStatus(projectId, taskId),
      null,
      { params: { status } }
    );
  }

  updateTaskPriority(
    projectId: number,
    taskId: number,
    priority: TaskPriority
  ): Observable<Task> {
    return this.http.put<Task>(
      AUTH_API.projects.tasks.updatePriority(projectId, taskId),
      null,
      { params: { priority } }
    );
  }

  assignTask(
    projectId: number,
    taskId: number,
    assigneeId: number | undefined
  ): Observable<Task> {
    const params: { [key: string]: string } = {};
    if (assigneeId !== undefined) params['assigneeId'] = assigneeId.toString();

    return this.http.put<Task>(
      AUTH_API.projects.tasks.assign(projectId, taskId),
      null,
      { params }
    );
  }
}
