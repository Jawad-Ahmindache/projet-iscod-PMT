import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AUTH_API } from '../constants/api.constants';
import { Page } from '../models/page.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);

  getProjects(): Observable<Project[]> {
    return this.http
      .get<Page<Project>>(AUTH_API.projects.list)
      .pipe(map((response) => response.content));
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(AUTH_API.projects.get(id));
  }

  createProject(project: Partial<Project>): Observable<Project> {
    return this.http.post<Project>(AUTH_API.projects.create, project);
  }

  updateProject(id: number, project: Partial<Project>): Observable<Project> {
    return this.http.put<Project>(AUTH_API.projects.update(id), project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(AUTH_API.projects.delete(id));
  }
}
