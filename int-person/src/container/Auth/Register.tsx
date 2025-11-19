"use client";

import RegisterForm from "@/components/auth/register/RegisterForm";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        createdAt: serverTimestamp(),
      });

      router.push("/dashboard");
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
