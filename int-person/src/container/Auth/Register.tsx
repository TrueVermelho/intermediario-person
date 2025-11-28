"use client";

import RegisterForm from "@/components/auth/register/RegisterForm";
import { useAuth } from "@/hooks/useAuth";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Register() {
  const router = useRouter();
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Se o usuário já estiver logado → redireciona
  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user, router]);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        role: "user",
        createdAt: serverTimestamp(),
      });

    } catch (err: unknown) {
      console.error(err);
      alert(err);
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
