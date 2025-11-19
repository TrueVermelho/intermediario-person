# Ícone Google com Animação — Resumo Geral

Este arquivo resume de forma organizada como funciona o **botão de Login com Google animado**, ideal para armazenar no Obsidian.

---

## 📌 Visão Geral

O botão utiliza:

* **Framer Motion** → animações suaves.
* **React Icons** → ícone `FcGoogle`.
* **Firebase Auth + Firestore** → login e registro automático.
* **Next.js Client Component**.

O objetivo é criar um botão moderno, animado e funcional.

---

## 🔠 Ícone Utilizado

**Pacote:** `react-icons`
**Família:** Flat Color Icons (fc)
**Ícone:** `FcGoogle`

### Import:

```tsx
import { FcGoogle } from "react-icons/fc";
```

---

## 🎬 Animações Usadas (Framer Motion)

1. **Hover:** aumenta o botão levemente
2. **Tap:** encolhe ao clicar
3. **Fade-in inicial:** aparece suavemente
4. **Rotação do ícone:** gira infinitamente durante o login

### Pacote:

```bash
npm install framer-motion
```

---

## 🎡 Animação de Rotação

Quando `loading === true`, o ícone roda:

```tsx
<motion.div
  animate={{ rotate: loading ? 360 : 0 }}
  transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}
>
  <FcGoogle size={22} />
</motion.div>
```

---

## 🔐 Firebase

O botão faz:

* Login com Google
* Registro no Firestore se o usuário não existir
* Atualiza o campo `updatedAt` se existir

---

## 📌 Estrutura do Documento no Firestore

```
users/
  UID/
    uid
    name
    email
    photoURL
    provider
    createdAt
    updatedAt
```

---

## 🧩 Código Base do Botão (Resumo)

```tsx
<motion.button
  whileHover={{ scale: 1.07 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
>
  <motion.div ...>
    <FcGoogle />
  </motion.div>
  {loading ? "Entrando..." : "Entrar com Google"}
</motion.button>
```

---

## ✨ Benefícios do Botão Animado

* Interface mais agradável
* UX mais moderna
* Feedback visual claro durante carregamento
* Integração direta com Firebase

---
