"use client";

import RegisterForm from "@/components/auth/register/RegisterForm";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Cria o documento no Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        createdAt: new Date().toISOString(),
      });

      alert("Conta criada com sucesso!");
      auth.onAuthStateChanged(() => router.push("/dashboard")); // Redireciona o usuario
    } catch (err: unknown) {
      if (err instanceof Error) alert(err.message);
    }
  }

  return (
    <RegisterForm
      handleRegister={handleRegister}
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}
