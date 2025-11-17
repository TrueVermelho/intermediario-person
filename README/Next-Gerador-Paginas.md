# Next.js 16+ — Geração Automática de Páginas Dinâmicas (Guia Profissional)

Este arquivo é um guia completo, profissional e direto ao ponto sobre como o **Next.js 16+ gera páginas automaticamente** usando o App Router. Ideal para estudos, projetos reais e documentação no Obsidian.

---

# 📌 1. O que significa "criar página sozinho" no Next.js?

No Next.js 16+, quando você cria pastas como:

```
/app/produto/[id]/page.tsx
```

O framework **automaticamente** cria rotas para qualquer URL que siga esse padrão.

### Exemplos funcionam automaticamente:

```
/produto/1
/produto/50
/produto/abc
```

Você não precisa registrar rotas manualmente. O sistema de arquivos é a própria rota.

---

# 🔧 2. Como criar uma rota dinâmica

### Estrutura:

```
/app/produto/[id]/page.tsx
```

### Código:

```tsx
interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <h1>Produto: {params.id}</h1>;
}
```

👉 O Next entrega automaticamente `params.id` baseado na URL.

---

# 🚀 3. Como o Next gera páginas automaticamente (Server Rendering)

Por padrão, cada rota dinâmica:

* roda no servidor (Server Component)
* é gerada sob demanda
* funciona perfeitamente com fetch, banco de dados e autenticação

Exemplo:

```tsx
export default async function Page({ params }) {
  const produto = await fetch(`https://api.com/produto/${params.id}`).then(r => r.json());
  return <div>{produto.nome}</div>;
}
```

Essa página é **renderizada automaticamente** sempre que alguém acessar.

---

# 🏗️ 4. Geração Estática Profissional (SSG)

Se você quer que o Next **crie os HTMLs no build**, use:

## `generateStaticParams()`

```tsx
export async function generateStaticParams() {
  const produtos = await fetch("https://api.com/produtos").then(r => r.json());

  return produtos.map((p: any) => ({ id: p.id }));
}
```

O Next irá gerar:

```
/produto/1
/produto/2
/produto/3
...
```

### Vantagens profissionais:

* Muito mais rápido (CDN)
* Barato para hospedagem
* Performance máxima
* Zero load no servidor

---

# 🔁 5. Quando a página NÃO será estática

O Next automaticamente transforma a página em **dynamic** se houver:

* uso de cookies
* uso de headers
* leitura de busca dinâmica
* autenticação por token
* banco de dados em tempo real

Exemplo:

```tsx
import { cookies } from "next/headers";
export default function Page() {
  const user = cookies().get("session");
  return <div>Olá {user?.value}</div>;
}
```

👉 Esta página **não será estática (SSG)**.

---

# 📚 6. Rotas opcionais e catch‑all

## Rota opcional:

```
/app/blog/[[...slug]]/page.tsx
```

## Rota catch‑all:

```
/app/docs/[...slug]/page.tsx
```

Essas rotas também são geradas automaticamente.

---

# 🧪 7. Testando como um profissional

Checklist para garantir que tudo funciona:

### ✔ A pasta dinâmica está correta?

```
[id]   → ok
[id]/page.tsx → ok
```

### ✔ Os parâmetros retornados por `generateStaticParams` conferem com o nome da pasta?

```
pasta: [id]
return: { id: "1" }
```

### ✔ O fetch no build está funcionando?

Erros na build quebram SSG.

### ✔ A página não depende de cookies ou headers?

Se depender, ela vira dynamic.

### ✔ Use sempre logs no build para depurar:

```ts
console.log("Gerando página para", params.id);
```

---

# 🧨 8. Erros comuns que impedem a geração automática

### ❌ colocar o nome errado do param

* Pasta: `[id]`
* Retorno: `{ productId: 1 }` → ERRO

### ❌ tentar usar `getStaticProps` ou `getServerSideProps`

→ Não existem no App Router.

### ❌ usar hooks do client em Server Component

* `useRouter()`
* `useState()`

→ Isso só funciona com `"use client"`.

---

# 🏆 9. Como usar isso profissionalmente em produção

### ✔ Sempre gerar páginas estáticas quando possível

Sites de catálogo, blogs, portfólios, produtos.

### ✔ Gerar páginas dinâmicas apenas quando necessário

Dados sensíveis, personalizados, dashboards.

### ✔ Habilitar cache inteligente

```ts
fetch(url, { next: { revalidate: 60 } });
```

Revalida a cada minuto.

### ✔ Criar fallback de carregamento

```
/app/produto/[id]/loading.tsx
```

### ✔ Criar página de erro

```
/app/produto/[id]/error.tsx
```

### ✔ Usar CDN (Vercel) para máximo desempenho

Páginas estáticas ficam ultra rápidas.

---

# 📝 10. Conclusão Geral

O Next.js 16+ **cria páginas sozinho** desde que você siga:

* pasta dinâmica `[id]`
* Server Component correto
* `generateStaticParams()` para SSG
* sem hooks de client no server
* sem dependência de cookies para páginas estáticas

Se seguir tudo isso, você terá uma arquitetura profissional:

* rápida
* estável
* barata
* escalável
* organizada

Perfeita para produção.
