"use client";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default function LogoutPage() {
  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="p-3 bg-red-600 text-white rounded"
    >
      Sair
    </button>
  );
}
