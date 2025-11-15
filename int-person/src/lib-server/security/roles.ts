export type Role = "admin" | "editor" | "viewer";

export const roles: Record<Role, string[]> = {
  admin: ['create_user', 'delete_user', 'update_post', 'view_post'],
  editor: ['update_post', 'view_post'],
  viewer: ['view_post'],
};

export const rolePermissions: Record<Role, string[]> = {
  admin: ["/dashboard", "/settings", "/profile"],
  editor: ["/settings", "/profile"],
  viewer: ["/profile"],
};
