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

# VISUALIZAÇÃO DO SRC

```
src/
│
├── app/                 # Rotas do Next.js (App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts
│
├── components/          # Componentes reutilizáveis (botões, cards, headers)
│   ├── ui/
│   ├── layout/
│   └── ...
│
├── containers/          # Blocos grandes de seção (hero, sobre, contato, etc.)
│   ├── HomeHero/
│   ├── AboutSection/
│   └── ContactForm/
│
├── lib/                 # Funções utilitárias (formatar data, tratar string, etc.)
│   ├── utils.ts
│   ├── supabase.ts
│   └── apiClient.ts
│
├── hooks/               # Custom hooks React (useTheme, useScroll, etc.)
│
├── styles/              # Estilos globais e temas
│   ├── globals.ts
│   ├── theme.ts
│   └── mixins.ts
│
├── types/               # Tipagens globais (.d.ts)
│
└── assets/              # Imagens, ícones, SVGs locais
```
