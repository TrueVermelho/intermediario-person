"use client";

import { auth, db, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import "./styleGoogle.css";

export default function LoginGoogle() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleGoogle() {
    try {
      setLoading(true);

      // Faz login com Google
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("user logado", user);

      // Referência do documento do usuário
      const userRef = doc(db, "users", user.uid);

      // Verifica se já existe
      const snapshot = await getDoc(userRef);

      if (!snapshot.exists()) {
        // Cria novo documento no Firestore
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
        });
        console.log("Usuário registrado no Firestore!");
      } else {
        console.log("Usuário já existe no Firestore.");
      }

      router.push("/dashboard");
    } catch (err) {
      console.error("Erro no login Google:", err);
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
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25 }}
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
