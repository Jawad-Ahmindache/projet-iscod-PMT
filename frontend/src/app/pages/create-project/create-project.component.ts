import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent {
  private fb = inject(FormBuilder);
  private projectService = inject(ProjectService);
  private router = inject(Router);

  projectForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
    startDate: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.projectForm.valid) {
      this.projectService
        .createProject(this.projectForm.value)
        .subscribe((project) => {
          this.router.navigate(['/projects', project.id]);
        });
    }
  }

  onCancel(): void {
    this.router.navigate(['/projects']);
  }
}
