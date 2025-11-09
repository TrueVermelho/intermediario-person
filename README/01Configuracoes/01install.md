# Configurações e Instalações do Projeto

## 1. Next.js

```
npx create-next-app .
y em todos.
```

---
## 2. ESLint

Já vem com o Next.js, mas pode atualizar:


```bash
npm install --save-dev eslint @eslint/eslintrc eslint-config-next
```

---
## 3. Prettier

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```
### .prettierrc

```json
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "all",
    "endOfLine": "auto"
}
```

### No seu eslint.config.mjs, adicione "plugin:prettier/recommended" nos extends:

```json
...compat.extends(
  "next/core-web-vitals",
  "plugin:prettier/recommended"
)
```
### .prettierignore

```
node_modules
.next
out
```

---
### ⚙️ Como configurar o VS Code para "auto corrigir" com ESLint ao salvar:

1. **Instale a extensão ESLint** (link acima).
2. No seu VS Code, vá em:

   **`File` > `Preferences` > `Settings`** (ou `Ctrl + ,`)

3. No campo de busca, digite: `eslint format`
4. Ative:
   * ✅ `ESLint: Enable`
   * ✅ `Editor: Code Actions On Save` > clique em "Edit in settings.json" e adicione:

```jsonc
// settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
        "source.fixAll.eslint": "explicit"
  },

  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],

  // oque faz o eslint corrigir sozinho meu format
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true
}
```
---
### 🛠️ Dica bônus:

Se você **não quiser mais o Prettier**, remova a extensão `Prettier - Code formatter` do VS Code (ou desative) para evitar conflito.

---
### ✅ Agora, ao salvar (`Ctrl + S`), o ESLint:

* Corrige indentação
* Fecha/abre chaves corretamente
* Remove vírgulas extras, etc.
* Tudo sem você precisar organizar na mão
---
## 4. Styled-Components

```
npm install styled-components
npm install --save-dev @types/styled-components babel-plugin-styled-components
```
### next.config.ts

```
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
};
export default nextConfig;
```

---
## 5. ts-node (opcional para executar .ts direto)

```
npm install --save-dev ts-node
```
---
