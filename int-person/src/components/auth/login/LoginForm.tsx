import type { User } from "firebase/auth";
import "./styleLogin.css";

interface LoginFormProps {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  signInGoogle: () => void;
  user: User | null;
  loading: boolean;
}

export default function LoginForm({
  handleLogin,
  setEmail,
  setPassword,
  signInGoogle,
  user,
  loading,
}: LoginFormProps) {

  if (loading) return <p>Carregando...</p>;
  if (user) return <p>Você já está logado.</p>;

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

      <button className="loginBotaoPrimeiro">Entrar</button>

      <button
        type="button"
        onClick={signInGoogle}
        className="loginBotaoSegundo"
      >
        Entrar com Google
      </button>
    </form>
  );
}
