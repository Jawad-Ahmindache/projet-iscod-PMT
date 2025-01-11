import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoleService } from '../services/role.service';

export const RoleGuard = (allowedRoles: string[]): CanActivateFn => {
  return () => {
    const roleService = inject(RoleService);
    const router = inject(Router);

    if (!roleService.currentUserRoles) {
      router.navigate(['/login']);
      return false;
    }

    if (roleService.hasRoles(roleService.currentUserRoles, allowedRoles)) {
      return true;
    }

    router.navigate(['/unauthorized']);
    return false;
  };
};
