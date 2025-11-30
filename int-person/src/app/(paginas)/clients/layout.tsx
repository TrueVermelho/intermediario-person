'use client';

import ProtectedRoute from "@/lib-server/security/ProtectedRoute";

export default function ClientLayout({ children, }: { children: React.ReactNode; }) {

  return <ProtectedRoute>{children}</ProtectedRoute>;
}
