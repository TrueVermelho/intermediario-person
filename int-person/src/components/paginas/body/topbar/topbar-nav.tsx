'use clients';

import LogoutButton from "@/components/auth/logout/LogoutButton";
import { useAuth } from "@/hooks/useAuth";
import './styleTopbarNav.css';

export default function TopbarNav() {
  const auth = useAuth().user;
  return (
    <>
      {/*Topbar */}
      <div className="topbar">
        <h1>Dashboard</h1>
        <div className="profile">{`Olá, ${auth?.displayName}`}</div>
      </div>
    </>
  );
}
