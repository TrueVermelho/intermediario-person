import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-sm mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Criar conta</h1>
      <RegisterForm />
    </div>
  );
}
