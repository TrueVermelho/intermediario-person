"use client";

import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
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
      const result = await signInWithPopup(auth, googleProvider);
      console.log('user logado', result.user);
      router.push('/dashboard');
    } catch (err) {
      console.log(err)
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
        transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}
      >
        <FcGoogle size={22} />
      </motion.div>

      {loading ? "Entrando..." : "Entrar com Google"}
    </motion.button>
  );
}
