import validator from "validator";
import { z } from "zod";

export function validarEmail(email: unknown): string {
  const schema = z
    .string()
    .trim()
    .min(5, { message: "O e-mail deve ter pelo menos 5 caracteres." })
    .max(100, { message: "O e-mail deve ter no máximo 100 caracteres." })
    .refine((val) => validator.isEmail(val), {
      message: "Formato de e-mail inválido.",
    });

  const result = schema.safeParse(String(email));

  if (!result.success) {
    throw new Error("E-mail inválido: " + result.error.issues[0].message);
  }

  return validator.normalizeEmail(result.data) || result.data;
}
