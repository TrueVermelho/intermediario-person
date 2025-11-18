"use client";

import LoginForm from "@/components/auth/login/LoginForm";
import { useAuth } from "@/hooks/useAuth";
import { auth, db, googleProvider } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Login() {
  const router = useRouter();
  const { loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroMensagem, setErroMensagem] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Email
    try {
      console.log("Fazendo login Email");
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login OK:", userCredential.user);

      const token = await userCredential.user.getIdToken();

      // Salva o token em cookie via API
      await fetch("/api/auth/set-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      console.log("Indo para dashboard...");
      router.push("/dashboard");

    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("ERRO LOGIN:", err);
        setErroMensagem(err.message);
      }
    }
  }

  async function signInGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Fazendo login Google:", result.user);

      const user = result.user;

      // Verifica se já tem um documento no Firestore
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, {
          name: user.displayName,
          email: user.email,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }, { merge: true });
      }
      router.push("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) setErroMensagem(err.message);
    }
  }

  return (
    <LoginForm
      handleLogin={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
      signInGoogle={signInGoogle}
      loading={loading}
      erroMensagem={erroMensagem}
    />
  );
}
