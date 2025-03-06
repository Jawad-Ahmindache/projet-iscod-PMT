import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API } from '../constants/api.constants';
import { ProjectMember } from '../models/project-member.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectMemberService {
  private http = inject(HttpClient);

  getProjectMembers(projectId: number): Observable<ProjectMember[]> {
    return this.http.get<ProjectMember[]>(
      AUTH_API.projects.members.list(projectId)
    );
  }
}
