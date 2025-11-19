"use client";

import LoginForm from "@/components/auth/login/LoginForm";
import { useAuth } from "@/hooks/useAuth";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroMensagem, setErroMensagem] = useState<string | null>(null);

  // Se o usuário já estiver logado → redireciona
  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user, router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("ERRO LOGIN:", err);
        setErroMensagem(err.message);
      }
    }
  }

  return (
    <LoginForm
      handleLogin={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
      loading={loading}
      erroMensagem={erroMensagem}
    />
  );
}
