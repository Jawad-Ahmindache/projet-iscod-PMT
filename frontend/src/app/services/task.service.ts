import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AUTH_API } from '../constants/api.constants';
import { TaskHistory } from '../models/task-history.model';
import {
  Task,
  TaskPriority,
  TaskStatus,
  UpdateTaskDto,
} from '../models/task.model';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private toastService = inject(ToastService);

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur est survenue';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else if (error.status === 403) {
      errorMessage =
        "Vous n'avez pas les droits nécessaires pour effectuer cette action";
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    }
    this.toastService.showError(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  getProjectTasks(projectId: number): Observable<Task[]> {
    return this.http
      .get<Task[]>(AUTH_API.projects.tasks.list(projectId))
      .pipe(catchError((error) => this.handleError(error)));
  }

  getTask(projectId: number, taskId: number): Observable<Task> {
    return this.http
      .get<Task>(AUTH_API.projects.tasks.get(projectId, taskId))
      .pipe(catchError((error) => this.handleError(error)));
  }

  getTaskHistory(projectId: number, taskId: number): Observable<TaskHistory[]> {
    return this.http
      .get<TaskHistory[]>(AUTH_API.projects.tasks.history(projectId, taskId))
      .pipe(catchError((error) => this.handleError(error)));
  }

  createTask(projectId: number, task: Partial<Task>): Observable<Task> {
    return this.http
      .post<Task>(AUTH_API.projects.tasks.create(projectId), task)
      .pipe(catchError((error) => this.handleError(error)));
  }

  updateTask(
    projectId: number,
    taskId: number,
    task: UpdateTaskDto
  ): Observable<Task> {
    return this.http
      .put<Task>(AUTH_API.projects.tasks.update(projectId, taskId), task)
      .pipe(catchError((error) => this.handleError(error)));
  }

  updateTaskStatus(
    projectId: number,
    taskId: number,
    status: TaskStatus
  ): Observable<Task> {
    return this.http
      .put<Task>(
        AUTH_API.projects.tasks.updateStatus(projectId, taskId),
        null,
        { params: { status } }
      )
      .pipe(catchError((error) => this.handleError(error)));
  }

  updateTaskPriority(
    projectId: number,
    taskId: number,
    priority: TaskPriority
  ): Observable<Task> {
    return this.http
      .put<Task>(
        AUTH_API.projects.tasks.updatePriority(projectId, taskId),
        null,
        { params: { priority } }
      )
      .pipe(catchError((error) => this.handleError(error)));
  }

  assignTask(
    projectId: number,
    taskId: number,
    assigneeId: number | undefined
  ): Observable<Task> {
    const params: { [key: string]: string } = {};
    if (assigneeId !== undefined) params['assigneeId'] = assigneeId.toString();

    return this.http
      .put<Task>(AUTH_API.projects.tasks.assign(projectId, taskId), null, {
        params,
      })
      .pipe(catchError((error) => this.handleError(error)));
  }
}
