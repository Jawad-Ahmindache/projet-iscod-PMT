import { Injectable } from '@angular/core';
import { ROLE_ADMIN } from '../../constants/roles.constants';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  currentUserRoles: string[] = [];

  hasRoles(projectRoles: string[], allowedRoles: string[]): boolean {
    // Si l'utilisateur est admin, il a accès à tout
    if (projectRoles.includes(ROLE_ADMIN)) {
      return true;
    }

    // Vérifie si l'utilisateur a au moins un des rôles requis
    return allowedRoles.some((role) => projectRoles.includes(role));
  }

  setCurrentUserRoles(roles: string[]) {
    this.currentUserRoles = roles;
  }
}
