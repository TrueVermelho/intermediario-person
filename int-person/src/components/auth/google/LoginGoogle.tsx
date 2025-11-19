"use client";

import { auth, db, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import "./styleGoogle.css";

export default function GoogleButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleGoogle() {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Cria ou atualiza o usuário no Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastLogin: serverTimestamp(),
      });

      if (user) return router.push("/dashboard");
    } catch (err: unknown) {
      console.error("Erro login Google:", err);
      alert("Não foi possível logar com Google. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.button
      onClick={handleGoogle}
      disabled={loading}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className="loginGoogle"
    >
      <motion.div
        animate={{ rotate: loading ? 360 : 0 }}
        transition={{
          duration: 1,
          repeat: loading ? Infinity : 0,
          ease: "linear",
        }}
      >
        <FcGoogle size={22} />
      </motion.div>
      {loading ? "Entrando..." : "Entrar com Google"}
    </motion.button>
  );
}
