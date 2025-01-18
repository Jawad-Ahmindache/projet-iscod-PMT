import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Column,
  DataTableComponent,
  TableAction,
} from '../../components/shared/data-table/data-table.component';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  private projectService = inject(ProjectService);
  private router = inject(Router);

  loading = false;
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  projects: any[] = [];

  columns: Column[] = [
    { key: 'name', label: 'Nom du projet', sortable: true },
    { key: 'description', label: 'Description' },
    { key: 'startDate', label: 'Date de début', sortable: true },
    { key: 'memberCount', label: 'Membres' },
  ];

  actions: TableAction[] = [
    {
      label: 'Voir le projet',
      icon: 'fas fa-eye',
      action: (project) => this.viewProject(project),
    },
  ];

  constructor() {
    this.loadProjects();
  }

  async loadProjects(page = 1) {
    this.loading = true;
    try {
      const response = await this.projectService.getProjects(
        page,
        this.pageSize
      );
      this.projects = response.content;
      this.totalItems = response.totalElements;
      this.currentPage = page;
    } catch (error) {
      
    } finally {
      this.loading = false;
    }
  }

  onPageChange(page: number): void {
    this.loadProjects(page);
  }

  onSortChange(sort: { key: string; direction: 'asc' | 'desc' }): void {}

  viewProject(project: any): void {
    this.router.navigate(['/projects', project.id]);
  }
}
