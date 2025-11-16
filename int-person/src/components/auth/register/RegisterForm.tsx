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
