"use client";

import LoginForm from "@/components/auth/login/LoginForm";
import { useAuth } from "@/hooks/useAuth";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Se o usuário já estiver logado → redireciona
  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user, router]);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Fazendo login Email');
    } catch (err: unknown) {
      if (err instanceof Error) alert(err.message);
    }
  }

  async function signInGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log('Fazendo login Google');
    } catch (err: unknown) {
      if (err instanceof Error) alert(err.message);
    }
  }

  return (
    <LoginForm
      handleLogin={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
      signInGoogle={signInGoogle}
      user={user}
      loading={loading}
    />
  );
}
