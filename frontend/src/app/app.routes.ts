import { Routes } from '@angular/router';
import { AuthGuard, OnlyNotAuthGuard } from './core/guards/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AccountComponent } from './pages/account/account.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: 'projects',
        component: ProjectListComponent,
      },
      {
        path: 'projects/create',
        component: CreateProjectComponent,
      },
      {
        path: 'projects/:id',
        component: ProjectDetailComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [OnlyNotAuthGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];
