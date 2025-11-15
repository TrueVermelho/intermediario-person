import { rolePermissions, type Role } from "./roles";

export class RBAC {
  static canAccess(pathname: string, userRoles: Role[]): boolean {
    for (const role of userRoles) {
      const allowedRoutes = rolePermissions[role];

      if (allowedRoutes.some(route => pathname.startsWith(route))) {
        return true;
      }
    }
    return false;
  }
}
