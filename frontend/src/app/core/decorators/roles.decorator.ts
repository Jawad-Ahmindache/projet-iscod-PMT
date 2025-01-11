import { ROLE_ADMIN } from '../roles.constants';

export function Roles(allowedRoles: string[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const projectRole = this.projectRole;

      if (projectRole === ROLE_ADMIN || allowedRoles.includes(projectRole)) {
        return originalMethod.apply(this, args);
      } else {
        console.error('Accès non autorisé');
        return null;
      }
    };

    return descriptor;
  };
}
