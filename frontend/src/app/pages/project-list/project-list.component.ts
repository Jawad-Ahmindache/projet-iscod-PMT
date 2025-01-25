import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  private projectService = inject(ProjectService);
  private router = inject(Router);
  projects: Project[] = [];

  ngOnInit(): void {
    this.loadProjects();
  }

  onProjectClick(project: Project): void {
    this.router.navigate(['/projects', project.id]);
  }

  onCreateProject(): void {
    this.router.navigate(['/projects/create']);
  }

  private loadProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }
}
