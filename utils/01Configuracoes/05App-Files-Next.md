# Estrutura Mínima do `src/app/` no Next.js (App Router)

Este documento explica quais arquivos são **obrigatórios** e quais são **opcionais**, mas recomendados, dentro do diretório `src/app/` para que um projeto Next.js usando o App Router funcione corretamente.

---

## ✔️ Arquivos Obrigatórios

### **1. `layout.tsx`**

* Define o layout raiz da aplicação.
* É **obrigatório** existir na raiz de `app/`.
* Deve exportar um componente React padrão e incluir `{ children }`.

### **Exemplo mínimo:**

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
```

---

## ✔️ Arquivo Recomendado (Evita Erros)

### **2. `not-found.tsx`**

* Página exibida quando uma rota não existe.
* Embora não seja oficialmente obrigatório, **evita erros no build**, especialmente em versões *canary* do Next.js.

### **Exemplo simples:**

```tsx
export default function NotFound() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Página não encontrada</h1>
      <p>A página que você tentou acessar não existe.</p>
    </div>
  );
}
```

---

## 🟡 Arquivos Opcionais (Comportamentos Especiais)

### **3. `page.tsx`**

* Define a página principal da rota.
* Não é obrigatório, mas quase todo projeto usa.

### **4. `loading.tsx`**

* Mostra um *loading* enquanto a rota carrega.
* Opcional.

### **5. `error.tsx`**

* Captura erros da rota e exibe uma interface personalizada.
* Opcional.

### **6. `route.ts`** dentro de subpastas (API Routes)

* Define rotas de API.
* Opcional.

---

## ✔️ Estrutura Mínima Recomendada

```
src/app/
 ├─ layout.tsx       ← obrigatório
 ├─ page.tsx         ← comum
 ├─ not-found.tsx    ← recomendável para evitar bugs
```

---

## Exemplo Completo e Limpo

```
src/app/
 ├─ layout.tsx
 ├─ page.tsx
 ├─ not-found.tsx
 ├─ loading.tsx      ← opcional
 ├─ error.tsx        ← opcional
 └─ api/
     └─ hello/
         └─ route.ts
```

---

## 📌 Observações Importantes

* Pastas com parênteses como `(auth)` e `(pages)` são **route groups** e são totalmente válidas.
* Apenas `layout.tsx` é estritamente necessário para o Next funcionar.
* Em versões canary, a falta de `not-found.tsx` pode causar erros durante o `build`.

---

Se você quiser, posso gerar também:

* um arquivo explicando **estrutura completa de rotas**,
* um guia de **padronização de pastas**,
* ou um template para projetos Next.js profissionais.
