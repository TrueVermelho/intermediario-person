"use client";

import ProtectedRoute from "@/lib-server/security/ProtectedRoute";

export default function DashboardLayout({ children, }: { children: React.ReactNode; }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
