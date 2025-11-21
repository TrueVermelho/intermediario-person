# 🎨 CSS — Pseudo-Classes

As **pseudo-classes** em CSS são usadas para definir **estilos especiais** para elementos em **estados específicos**, como quando o usuário passa o mouse, um link é visitado, um campo está focado etc.

---

## 🧠 O que são Pseudo-Classes?

Pseudo-classes começam com dois pontos (`:`) e **não precisam de classes ou IDs** no HTML.  
Elas descrevem **um estado temporário ou lógico** de um elemento.

Exemplo:
```css
button:hover {
  background-color: blue;
  color: white;
}
````

> Quando o usuário passar o mouse sobre o botão (`hover`), o estilo será aplicado.

---

## 🔥 Pseudo-classes mais comuns

| Pseudo-classe    | Descrição                                            | Exemplo                                       |
| ---------------- | ---------------------------------------------------- | --------------------------------------------- |
| `:hover`         | Quando o mouse passa sobre o elemento.               | `a:hover { color: red; }`                     |
| `:active`        | Quando o elemento é clicado.                         | `button:active { transform: scale(0.95); }`   |
| `:focus`         | Quando o elemento recebe foco (ex: input clicado).   | `input:focus { border-color: blue; }`         |
| `:visited`       | Para links já visitados.                             | `a:visited { color: purple; }`                |
| `:link`          | Para links não visitados.                            | `a:link { color: blue; }`                     |
| `:checked`       | Quando um checkbox ou radio está selecionado.        | `input:checked { accent-color: green; }`      |
| `:disabled`      | Quando um elemento está desativado.                  | `button:disabled { opacity: 0.5; }`           |
| `:enabled`       | Quando o elemento está habilitado.                   | `input:enabled { background: #fff; }`         |
| `:required`      | Quando o campo é obrigatório.                        | `input:required { border: 2px solid red; }`   |
| `:optional`      | Quando o campo não é obrigatório.                    | `input:optional { border: 1px dashed gray; }` |
| `:valid`         | Quando o valor do campo é válido.                    | `input:valid { border-color: green; }`        |
| `:invalid`       | Quando o valor do campo é inválido.                  | `input:invalid { border-color: red; }`        |
| `:first-child`   | Quando o elemento é o **primeiro filho** de seu pai. | `li:first-child { font-weight: bold; }`       |
| `:last-child`    | Quando é o **último filho**.                         | `li:last-child { color: blue; }`              |
| `:nth-child(n)`  | Seleciona o **n-ésimo** filho.                       | `tr:nth-child(2n)` (pares)                    |
| `:not(selector)` | Exclui elementos que correspondem ao seletor.        | `p:not(.importante)`                          |
| `:empty`         | Quando o elemento **não tem conteúdo**.              | `div:empty { display: none; }`                |

---

## 🧩 Exemplo completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de Pseudo-Classes</title>
  <style>
    a:link {
      color: blue;
    }

    a:visited {
      color: purple;
    }

    a:hover {
      color: red;
      text-decoration: underline;
    }

    a:active {
      color: orange;
    }

    input:focus {
      border: 2px solid green;
      outline: none;
    }

    li:first-child {
      font-weight: bold;
    }

    li:nth-child(even) {
      background-color: #f0f0f0;
    }

    input:invalid {
      border-color: red;
    }
  </style>
</head>
<body>
  <a href="#">Link de exemplo</a>

  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <form>
    <input type="email" placeholder="Digite um email válido">
  </form>
</body>
</html>
```

---

## ⚙️ Pseudo-classes estruturais

Essas pseudo-classes selecionam elementos **com base na posição no DOM**.

| Pseudo-classe        | Seleciona                      | Exemplo                |
| -------------------- | ------------------------------ | ---------------------- |
| `:first-child`       | Primeiro filho                 | `p:first-child`        |
| `:last-child`        | Último filho                   | `div:last-child`       |
| `:nth-child(n)`      | N-ésimo filho (1-based)        | `li:nth-child(2)`      |
| `:nth-last-child(n)` | N-ésimo filho a partir do fim  | `tr:nth-last-child(1)` |
| `:first-of-type`     | Primeiro de um tipo específico | `p:first-of-type`      |
| `:last-of-type`      | Último de um tipo específico   | `p:last-of-type`       |
| `:nth-of-type(n)`    | N-ésimo de um tipo             | `li:nth-of-type(odd)`  |
| `:only-child`        | Único filho                    | `div:only-child`       |
| `:empty`             | Sem filhos (nem texto)         | `div:empty`            |

---

## 🎯 Dica prática

Combine pseudo-classes para criar efeitos poderosos:

```css
button:hover:enabled {
  background: #007bff;
  color: white;
  transform: scale(1.05);
}
```

> Este exemplo aplica o estilo **somente quando o botão está habilitado** e o usuário passa o mouse sobre ele.

---

## 🧱 Resumo rápido

✅ **Estados do usuário** → `:hover`, `:active`, `:focus`
✅ **Validação de formulário** → `:valid`, `:invalid`, `:required`, `:optional`
✅ **Estrutura do DOM** → `:first-child`, `:nth-child`, `:not()`
✅ **Interação** → `:checked`, `:disabled`, `:enabled`

---

## 🧾 Referência oficial

📘 [MDN Web Docs — CSS Pseudo-classes](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)

---
