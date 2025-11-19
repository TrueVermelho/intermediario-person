"use client";

import { auth, db, googleProvider } from "@/lib/firebase";
import { type User, getRedirectResult, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginGoogle() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // ⬇️ EVITA LOOP E CARREGA LOGIN REDIRECT
  useEffect(() => {
    let active = true;

    async function checkRedirect() {
      try {
        const result = await getRedirectResult(auth);

        if (!active) return;

        if (result?.user) {
          await salvarUsuario(result.user);
          router.push("/dashboard");
        }
      } catch (err) {
        console.error("Redirect error:", err);
      }
    }

    checkRedirect();
    return () => {
      active = false;
    };
  }, [router]);

  async function salvarUsuario(user: User) {
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        uid: user.uid,
        name: user.displayName || "",
        email: user.email,
        photoURL: user.photoURL || "",
        provider: "google",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } else {
      await setDoc(
        ref,
        { updatedAt: serverTimestamp() },
        { merge: true }
      );
    }
  }

  async function handleGoogle() {
    try {
      setLoading(true);

      // DEV = REDIRECT (popup quebra no localhost)
      if (process.env.NODE_ENV === "development") {
        await signInWithRedirect(auth, googleProvider);
        return;
      }

      // PRODUÇÃO = POPUP OK
      const result = await signInWithPopup(auth, googleProvider);
      await salvarUsuario(result.user);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Erro ao entrar com Google");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.button
      onClick={handleGoogle}
      disabled={loading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="loginGoogle"
    >
      <motion.span
        animate={{ rotate: loading ? 360 : 0 }}
        transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}
      >
        <FcGoogle size={22} />
      </motion.span>

      {loading ? "Entrando..." : "Entrar com Google"}
    </motion.button>
  );
}
