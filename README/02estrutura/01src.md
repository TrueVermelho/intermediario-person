## ⚙️ 1. Criar o diretório `src/`

Na raiz do projeto, mova sua pasta `app/` (e qualquer outra pasta de código, como `components`, `lib`, etc) para dentro de `src/`.

---

## ⚙️ 2. Ajustar o `tsconfig.json`

Abra o arquivo `tsconfig.json` e adicione o campo `baseUrl` e `paths` (opcional, mas recomendado):

```json
{
  "compilerOptions": {
    // 👇 Adicione estas duas linhas
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
}
```

👉 Isso permite importar arquivos assim:

```ts
import Button from "@/components/Button";
import { formatDate } from "@/lib/utils";
```

Em vez de caminhos relativos grandes como `../../../components/Button`.

---

## ⚙️ 3. Ajustar scripts (se necessário)

O `package.json` não precisa mudar, mas vale conferir se os scripts estão corretos:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

> ✅ O Next vai automaticamente procurar o `src/app` como raiz do App Router.

---

## ⚙️ Rodar o projeto pra testar

```bash
npm run dev
```
