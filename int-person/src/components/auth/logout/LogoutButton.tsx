"use client";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import "./styleButton.css";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await signOut(auth);
      console.log('Fazendo Logout');
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="BotaoLogout"
    >
      Sair
    </button>
  );
}
