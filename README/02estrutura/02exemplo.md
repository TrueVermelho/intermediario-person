# Estrutura de Exemplo - page.tsx, Componentes e Containers

## Estrutura de pastas

```

src/
├── app/
│   └── page.tsx
├── components/
│   └── Button/
│       ├── index.tsx
│       └── styles.ts
├── containers/
│   └── HeroSection/
│       ├── index.tsx
│       └── styles.ts

````

---

## 1. Componentes (`components/Button/index.tsx`)

```tsx
import React from 'react';
import { buttonStyle } from './styles';

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};
````

`styles.ts`:

```ts
export const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};
```

---

## 2. Container (`containers/HeroSection/index.tsx`)

```tsx
import React from 'react';
import { Button } from '@/components/Button';
import { heroStyle, titleStyle } from './styles';

export const HeroSection: React.FC = () => {
  return (
    <section style={heroStyle}>
      <h1 style={titleStyle}>Bem-vindo ao Meu Portfólio</h1>
      <Button label="Saiba Mais" onClick={() => alert('Clicou!')} />
    </section>
  );
};
```

`styles.ts`:

```ts
export const heroStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
  backgroundColor: '#f0f0f0',
};

export const titleStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};
```

---

## 3. Page (`app/page.tsx`)

```tsx
import React from 'react';
import { HeroSection } from '@/containers/HeroSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
```

---

## ✅ Observações

* A **page.tsx** é a **entrada da rota** do Next.js (`/` neste caso).
* Um **container** representa **uma seção ou bloco da página** (`HeroSection`).
* Um **componente** é **uma peça reutilizável** (`Button`).
* Use **imports absolutos** com `@/` para manter os caminhos limpos.

---
