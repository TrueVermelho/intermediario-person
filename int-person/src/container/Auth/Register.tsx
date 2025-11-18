"use client";

import { auth, db, googleProvider } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

import "../../components/auth/register/styleRegister.css";

export default function RegisterForm(): ReactNode {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ----------------------------
  // 🔐 Salvar token no cookie
  // ----------------------------
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

  // ----------------------------
  // 📧 Registro com Email
  // ----------------------------
  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: form.name,
        email: form.email,
        createdAt: serverTimestamp(),
      });

      await setSessionToken();
      router.push("/dashboard");

    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("ERRO LOGIN:", err.message);
      }
    }
  }

  // ----------------------------
  // 🔵 Registro com Google
  // ----------------------------
  async function registerWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, {
          name: user.displayName || "",
          email: user.email || "",
          createdAt: serverTimestamp(),
        });
      }

      await setSessionToken();
      router.push("/dashboard");

    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("ERRO LOGIN:", err.message);
      }
    }
  }

  return (
    <form onSubmit={handleRegister} className="registerForm">
      <input
        type="text"
        placeholder="Nome"
        className="registerInput"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="registerInput"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Senha"
        className="registerInput"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button type="submit" className="registerBotao">
        Criar conta
      </button>

      <button type="button" onClick={registerWithGoogle}>
        Criar conta com Google
      </button>
    </form>
  );
}
