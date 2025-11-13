import { z } from "zod";

export function validarNumero(input: unknown, min?: number, max?: number): number {
  const numero = Number(input);

  if (!Number.isFinite(numero)) {
    throw new Error("Número inválido ou não finito.");
  }

  let schema = z.number();

  if (typeof min === "number") {
    schema = schema.min(min, { message: `O número deve ser no mínimo ${min}.` });
  }

  if (typeof max === "number") {
    schema = schema.max(max, { message: `O número deve ser no máximo ${max}.` });
  }

  const parsed = schema.safeParse(numero);

  if (!parsed.success) {
    throw new Error("Número inválido: " + parsed.error.issues[0].message);
  }

  return parsed.data;
}
