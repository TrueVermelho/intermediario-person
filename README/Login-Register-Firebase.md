# 📘 Next.js 16 + Firebase Auth (Email/Senha + Google)

Guia completo e atualizado para implementar **login**, **registro**, **Google OAuth**, **logout** e **proteção de rotas** no **Next.js 16+** usando apenas o **Firebase Auth**, sem tokens, sem APIs e sem backend.

---

> [!EXAMPLE]  
> ⚡ **Login e Registro são feitos diretamente no front-end**  
> No Next.js + Firebase você **não precisa** criar tokens, cookies, backend ou API interna.  
> Tudo é feito com:
> 
> - `signInWithEmailAndPassword`
>     
> - `createUserWithEmailAndPassword`
>     
> - `signInWithPopup`
>     
> - `signOut`
>     

---

# 📁 Estrutura Completa do Projeto

```
PROJECT ROOT
│
├── app/
│   ├── login/
│   │   └── page.tsx
│   │
│   ├── register/
│   │   └── page.tsx
│   │
│   ├── dashboard/
│   │   ├── layout.tsx         ← Protege rota
│   │   └── page.tsx
│   │
│   └── globals.css
│
│
├── components/
│   │
│   └── auth/
│       ├── login/
│       │   └── LoginForm.tsx
│       │
│       ├── register/
│       │   └── RegisterForm.tsx
│       │
│       ├── google/
│       │   └── GoogleButton.tsx
│       │
│       └── LogoutButton.tsx   ← LOGOUT
│
├── container/
│   │
│   └── Auth/
│       ├── Login.tsx
│       └── Register.tsx
│
├── hooks/
│   └── useAuth.ts
│
├── lib/
│   └── firebase.ts
├── lib-server/security/ProtectedRoute.tsx  ← Protege rota
```

---

# 🔥 1. Firebase Config

```ts
// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
```

---

# 🧠 2. Hook de Auth

```ts
// hooks/useAuth.ts
"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser ?? null);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { user, loading };
}
```

---

# 🛡️ 3. ProtectedRoute (Proteção de Rotas)

```tsx
// lib-server/security/ProtectedRoute.tsx
"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div>Carregando...</div>;

  if (!user) {
    router.push("/login");
    return null;
  }

  return children;
}
```

---

# 🧱 4. Componentes úteis e Exemplos.
> Exemplo de como usar a **proteção de rotas.**
```tsx
// src/app/dashboard/layout.tsx
"use client";

import ProtectedRoute from "@/lib-server/security/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
```

> Componente util para usar antes dos **handle** que automaticamente ao **logar/registrar** te leva para a **rota** desejada.

```tsx
import { useAuth } from "@/hooks/useAuth";
const { user } = useAuth();

// Se o usuário já estiver logado → redireciona
  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user, router]);
```

---

# ✉️ 5. AuthRegister e RegisterForm

```tsx
// src/container/Auth/Register.tsx
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
```

```tsx
// src/coomponents/auth/register/RegisterForm.tsx
'use client';

import "./styleRegister.css";

interface RegisterFormProps {
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

export default function RegisterForm({
  handleRegister,
  setName,
  setEmail,
  setPassword
}: RegisterFormProps) {

  return (
    <form onSubmit={handleRegister} className="registerForm">
      <input
        type="text"
        placeholder="Nome"
        className="registerInput"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="registerInput"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        className="registerInput"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="registerBotao">Criar conta</button>
    </form>
  );
}
```

---

# 🔐 6. AuthLogin e LoginForm (Email e Senha)

```tsx
// src/container/Auth/Login.tsx
"use client";

import LoginForm from "@/components/auth/login/LoginForm";
import { useAuth } from "@/hooks/useAuth";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroMensagem, setErroMensagem] = useState<string | null>(null);

  // Se o usuário já estiver logado → redireciona
  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user, router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("ERRO LOGIN:", err);
        setErroMensagem(err.message);
      }
    }
  }

  return (
    <LoginForm
      handleLogin={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
      loading={loading}
      erroMensagem={erroMensagem}
    />
  );
}
```

```tsx
// src/coomponents/auth/login/LoginForm.tsx
'use client';

import GoogleButton from "@/components/auth/google/LoginGoogle";
import "./styleLogin.css";

interface LoginFormProps {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  loading: boolean;
  erroMensagem?: string | null;
}

export default function LoginForm({
  handleLogin,
  setEmail,
  setPassword,
  loading,
  erroMensagem,
}: LoginFormProps) { 

  if (loading) return <p>Carregando...</p>;
  
  return (
    <form onSubmit={handleLogin} className="loginForm">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />

      {erroMensagem && <span className="erroMensagem">{erroMensagem}</span>}

      <button className="loginBotaoPrimeiro">Entrar</button>
  
      <GoogleButton />
    </form>
  );
}
```

---

# 🎯 7. Login com Google

```tsx
// /components/auth/google/LoginGoogle.tsx
"use client";

import { auth, db, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { useAuth } from "@/hooks/useAuth";
import "./styleGoogle.css";

export default function GoogleButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { user } = useAuth();
  // Se o usuário já estiver logado → redireciona
  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user, router]);

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
```

> [!WARNING]
> ### **Cuidado com CSP ele por BLOQUEAR o popup do GOOGLE**

---

# 🚪 8. Botão de Logout

```tsx
// src/components/auth/logout/LogoutButton.tsx
"use client";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import "./styleButtonLogout.css";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await signOut(auth);
      console.log('Fazendo Logout');
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="BotaoLogout"
    >
      Sair
    </button>
  );
}
```

---
