# Next.js 16+ — Rotas Dinâmicas

Este arquivo é um guia rápido e completo para Obsidian sobre **rotas dinâmicas no Next.js 16+**, focando na App Router.

---

## 📁 1. O que são Rotas Dinâmicas?

Em Next.js, rotas dinâmicas são pastas ou arquivos com colchetes (`[param]`) que indicam que o valor será definido pelo URL em tempo de execução.

Exemplo:

```
/app/produto/[id]/page.tsx
```

A rota acima responderá a URLs do tipo:

```
/produto/1
/produto/50
/produto/abc
```

---

## 🧩 2. Criando uma Rota Dinâmica

### **Pasta dinâmica**

```
/app/blog/[slug]/page.tsx
```

### **Dentro do arquivo**

```tsx
interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  return <h1>Post: {params.slug}</h1>;
}
```

---

## 🔁 3. Rotas Dinâmicas Múltiplas

Você pode ter mais de um parâmetro:

```
/app/user/[id]/[action]/page.tsx
```

Use:

```tsx
export default function Page({ params }) {
  return (
    <div>
      <p>ID: {params.id}</p>
      <p>Ação: {params.action}</p>
    </div>
  );
}
```

---

## 🧠 4. Rotas Opcionalmente Dinâmicas

Next.js permite parâmetros opcionais usando colchetes duplos:

```
/app/blog/[[...slug]]/page.tsx
```

### Resultado:

* `/blog` → `slug = undefined`
* `/blog/nextjs` → `slug = ["nextjs"]`
* `/blog/frameworks/react` → `slug = ["frameworks", "react"]`

---

## 🗂️ 5. Rotas Catch‑All

```
/app/docs/[...slug]/page.tsx
```

Captura:

* `/docs/config` → `["config"]`
* `/docs/next/advanced/routing` → `["next", "advanced", "routing"]`

---

## 🔎 6. Buscando Dados em Rotas Dinâmicas (Next 16+)

A App Router usa **Server Components**.
Você pode fazer fetch diretamente no componente:

```tsx
export default async function Page({ params }) {
  const data = await fetch(`https://api.exemplo.com/produto/${params.id}`).then(r => r.json());

  return <div>{data.nome}</div>;
}
```

---

## 🧪 7. Gerando Páginas Estáticas com `generateStaticParams`

```tsx
export async function generateStaticParams() {
  const produtos = await fetch("https://api.exemplo.com/produtos").then(r => r.json());

  return produtos.map(p => ({ id: p.id }));
}
```

Isso permite **SSG + rotas dinâmicas**.

---

## 🧭 8. Navegação com Rotas Dinâmicas

### **Com Link**

```tsx
<Link href={`/produto/${id}`}>Ver Produto</Link>
```

### **Com useRouter (Client Component)**

```tsx
'use client';
import { useRouter } from 'next/navigation';

const router = useRouter();

router.push(`/produto/${id}`);
```

---

## ⚠️ 9. Erros Comuns

### ❌ Criar rota dinâmica sem pasta `[param]`

### ❌ Tentar usar `useRouter` em Server Component

### ❌ Usar `getStaticProps`/`getServerSideProps` (não existe no App Router)

---

## 🧱 10. Estrutura Recomendada

```
/app
  └─ produto
       ├─ [id]
       │    ├─ loading.tsx
       │    ├─ error.tsx
       │    └─ page.tsx
       └─ page.tsx
```

---

## ✔️ Conclusão

Rotas dinâmicas no Next.js 16+ são simples e poderosas. Elas funcionam por meio de pastas com colchetes, suportam parâmetros opcionais, catch‑all e permitem geração estática inteligente com `generateStaticParams`.

Use este arquivo sempre que precisar relembrar ou estudar o fluxo completo!

---

## 🟦 11. Rotas Dinâmicas para API no Next.js 16+

Rotas dinâmicas também funcionam dentro da **API Route Handler** usando arquivos `route.ts`.

### 📁 Estrutura

```
/app/api/produto/[id]/route.ts
```

### 📌 Exemplo

```ts
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    message: "Produto carregado",
    id: params.id,
  });
}
```

### 🚀 Resultado

Acessando `/api/produto/10`:

```json
{
  "message": "Produto carregado",
  "id": "10"
}
```

---

## 🔁 Rotas Dinâmicas Múltiplas na API

```
/app/api/user/[id]/[action]/route.ts
```

```ts
export function GET(req, { params }) {
  return Response.json({
    id: params.id,
    action: params.action,
  });
}
```

---

## 📚 Rotas Catch-All na API

```
/app/api/logs/[...slug]/route.ts
```

```ts
export function GET(req, { params }) {
  return Response.json({
    slug: params.slug,
  });
}
```

Acessando `/api/logs/app/errors/today` → `slug = ["app", "errors", "today"]`

---

## 📌 Observações Importantes

* APIs no App Router **não usam** `pages/api`.
* Use métodos HTTP exportando funções: `GET`, `POST`, `PUT`, `DELETE`.
* `params` sempre vem no **segundo argumento**.
* Total suporte a autenticação, cookies, headers e fetch interno.

---
