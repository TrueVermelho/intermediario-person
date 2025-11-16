import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Entrar</h1>
      <LoginForm />
    </div>
  );
}
