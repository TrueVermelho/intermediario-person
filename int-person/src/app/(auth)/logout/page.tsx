"use client";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
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
      className="p-3 bg-red-600 text-white rounded"
    >
      Sair
    </button>
  );
}
