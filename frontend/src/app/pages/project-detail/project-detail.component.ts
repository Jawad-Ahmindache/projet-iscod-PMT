import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTableComponent } from '../../components/shared/data-table/data-table.component';
import {
  Tab,
  TabsComponent,
} from '../../components/shared/tabs/tabs.component';
import { TaskListComponent } from '../../components/task/task-list/task-list.component';
import { ProjectMember } from '../../models/project-member.model';
import { Project } from '../../models/project.model';
import { ProjectMemberService } from '../../services/project-member.service';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, TabsComponent, DataTableComponent, TaskListComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  private projectMemberService = inject(ProjectMemberService);

  project?: Project;
  members: ProjectMember[] = [];
  activeTab: string = 'tasks';

  tabs: Tab[] = [
    { id: 'tasks', label: 'Tâches' },
    { id: 'members', label: 'Membres' },
  ];

  ngOnInit(): void {
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    if (projectId) {
      this.loadProject(projectId);
    }
  }

  onTabChange(tabId: string): void {
    this.activeTab = tabId;
    if (tabId === 'members' && this.project) {
      this.loadMembers(this.project.id);
    }
  }

  private loadProject(id: number): void {
    this.projectService.getProject(id).subscribe((project) => {
      this.project = project;
      if (this.activeTab === 'members') {
        this.loadMembers(id);
      }
    });
  }

  private loadMembers(projectId: number): void {
    this.projectMemberService
      .getProjectMembers(projectId)
      .subscribe((members) => (this.members = members));
  }
}
