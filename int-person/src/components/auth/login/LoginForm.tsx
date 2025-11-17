import "./styleLogin.css";

interface LoginFormProps {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  signInGoogle: () => void;
  loading: boolean;
  erroMensagem?: string | null;
}

export default function LoginForm({
  handleLogin,
  setEmail,
  setPassword,
  signInGoogle,
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
