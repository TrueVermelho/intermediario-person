import sanitizeHtml from "sanitize-html";
import validator from "validator";
import { z } from "zod";

export function validarString(text: string, min = 1, max = 100): string {
  const schema = z
    .string()
    .min(min, { message: `A string deve ter no mínimo ${min} caracteres.` })
    .max(max, { message: `A string deve ter no máximo ${max} caracteres.` })
    .regex(/^[\p{L}\p{N}\s.,!?-]*$/u, {
      message: "A string contém caracteres inválidos. Não use símbolos especiais.",
    })
    .transform((str) => str.trim());

  const result = schema.safeParse(text);

  if (!result.success) {
    throw new Error("String inválida: " + result.error.issues[0].message);
  }

  const limpa = sanitizeHtml(result.data, {
    allowedTags: [],
    allowedAttributes: {},
  });

  return validator.escape(limpa);
}
