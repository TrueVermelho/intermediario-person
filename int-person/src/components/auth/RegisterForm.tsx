"use client";

import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [form, setForm] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: ""
  });

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
        createdAt: new Date()
      });

      alert("Conta criada com sucesso!");
    } catch (err: unknown) {
      if (err instanceof Error) alert(err.message);
    }
  }

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Nome"
        className="border p-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Senha"
        className="border p-2"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="p-2 bg-green-600 text-white">Criar conta</button>
    </form>
  );
}
