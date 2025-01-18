import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

export interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string;
  memberCount: number;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/projects`;

  async getProjects(
    page = 1,
    size = 10,
    sort?: { key: string; direction: 'asc' | 'desc' }
  ): Promise<PageResponse<Project>> {
    const params = new URLSearchParams({
      page: (page - 1).toString(),
      size: size.toString(),
    });

    if (sort) params.append('sort', `${sort.key},${sort.direction}`);

    const response = await this.http
      .get<PageResponse<Project>>(`${this.apiUrl}?${params.toString()}`)
      .toPromise();

    if (!response)
      throw new Error('Erreur lors de la récupération des projets');

    return response;
  }

  async getProjectById(id: number): Promise<Project> {
    const response = await this.http
      .get<Project>(`${this.apiUrl}/${id}`)
      .toPromise();

    if (!response) {
      throw new Error('Projet non trouvé');
    }

    return response;
  }
}
