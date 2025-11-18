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

  // -----------------------------
  // 🔐 Salvar token no cookie via API
  // -----------------------------
  async function setSessionToken() {
    try {
      const token = await auth.currentUser?.getIdToken(true);
      if (!token) return;

      await fetch("/api/set-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      console.log("Token salvo no cookie!");
    } catch (err) {
      console.error("Erro ao salvar token:", err);
    }
  }

  // -----------------------------
  // 📧 Login com Email & Senha
  // -----------------------------
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      console.log("Fazendo login com Email...");

      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      console.log("Login OK:", userCredential.user);

      await setSessionToken();

      console.log("Indo para dashboard...");
      router.push("/dashboard");

    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("ERRO LOGIN:", err);
        setErroMensagem(err.message);
      }
    }
  }

  // -----------------------------
  // 🔵 Login com Google
  // -----------------------------
  async function signInGoogle() {
    try {
      console.log("Iniciando login com Google...");

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Login Google OK:", user);

      await setSessionToken();

      // Verifica / cria documento no Firestore
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(
          ref,
          {
            name: user.displayName || "",
            email: user.email || "",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        );
      }

      router.push("/dashboard");

    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("ERRO GOOGLE LOGIN:", err);
        setErroMensagem(err.message);
      }
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
