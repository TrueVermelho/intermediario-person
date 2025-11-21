# 🎨 CSS — Pseudo-Elementos

Os **pseudo-elementos** permitem **estilizar partes específicas** de um elemento, como a **primeira letra**, a **primeira linha** ou **adicionar conteúdo virtual** antes/depois do elemento.

Eles são escritos com **dois pontos duplos** (`::`), embora a forma antiga com um só `:` ainda funcione em muitos navegadores.

---

## 🧠 O que são Pseudo-Elementos?

Um **pseudo-elemento** age **como se criasse um elemento filho virtual**, permitindo aplicar estilos ou inserir conteúdo sem alterar o HTML.

Exemplo:

```css
p::first-line {
  font-weight: bold;
  color: blue;
}
````

> Nesse caso, apenas a **primeira linha** do parágrafo será estilizada.

---

## 🔥 Pseudo-elementos mais usados

| Pseudo-elemento          | Descrição                                                            | Exemplo                                                        |
| ------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------- |
| `::before`               | Insere conteúdo **antes** do elemento.                               | `h1::before { content: "★ "; }`                                |
| `::after`                | Insere conteúdo **depois** do elemento.                              | `h1::after { content: " ★"; }`                                 |
| `::first-letter`         | Seleciona a **primeira letra**.                                      | `p::first-letter { font-size: 2em; }`                          |
| `::first-line`           | Seleciona a **primeira linha**.                                      | `p::first-line { font-weight: bold; }`                         |
| `::selection`            | Estiliza o texto **selecionado** (quando o usuário arrasta o mouse). | `::selection { background: yellow; color: black; }`            |
| `::placeholder`          | Estiliza o texto de **placeholder** em inputs.                       | `input::placeholder { color: gray; }`                          |
| `::marker`               | Estiliza o **marcador de listas** (`<ul>` / `<ol>`).                 | `li::marker { color: red; }`                                   |
| `::file-selector-button` | Estiliza o botão de upload (`input type="file"`).                    | `input[type=file]::file-selector-button { background: blue; }` |

---

## 🧩 Exemplo completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Pseudo-Elementos em CSS</title>
  <style>
    p::first-letter {
      font-size: 2em;
      color: #007bff;
    }

    p::first-line {
      font-weight: bold;
    }

    h1::before {
      content: "💡 ";
      color: gold;
    }

    h1::after {
      content: " ✨";
      color: gold;
    }

    input::placeholder {
      color: #aaa;
      font-style: italic;
    }

    ::selection {
      background: yellow;
      color: black;
    }

    li::marker {
      color: red;
      font-size: 1.2em;
    }

    input[type=file]::file-selector-button {
      background: #007bff;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 6px;
      cursor: pointer;
    }

    input[type=file]::file-selector-button:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  <h1>Exemplo de Pseudo-Elementos</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate est non leo tempor, sed tempor turpis euismod.</p>

  <input type="text" placeholder="Digite seu nome">

  <ul>
    <li>Item um</li>
    <li>Item dois</li>
    <li>Item três</li>
  </ul>

  <input type="file">
</body>
</html>
```

---

## ⚙️ Dicas importantes

* `::before` e `::after` **precisam da propriedade `content:`** (mesmo que vazia) para aparecer.
  Exemplo:

  ```css
  div::before {
    content: "";
    display: block;
    height: 2px;
    background: black;
  }
  ```

* Pseudo-elementos podem ser combinados com **pseudo-classes**:

  ```css
  button:hover::after {
    content: " 👆";
  }
  ```

* `::selection` é útil para personalizar a **cor de destaque** quando o texto é selecionado.

---

## 🧱 Pseudo-elementos de formatação de texto

| Pseudo-elemento  | Uso                                           |
| ---------------- | --------------------------------------------- |
| `::first-line`   | Formatação da primeira linha (texto corrido). |
| `::first-letter` | Estilo decorativo na primeira letra.          |
| `::selection`    | Texto selecionado pelo usuário.               |

---

## 🧩 Pseudo-elementos decorativos

| Pseudo-elemento | Uso                                            |
| --------------- | ---------------------------------------------- |
| `::before`      | Conteúdo ou ícone antes do elemento.           |
| `::after`       | Conteúdo ou ícone depois do elemento.          |
| `::marker`      | Customiza os marcadores de listas (`ul`/`ol`). |

---

## 🧮 Pseudo-elementos de formulário

| Pseudo-elemento          | Uso                                         |
| ------------------------ | ------------------------------------------- |
| `::placeholder`          | Estiliza texto placeholder.                 |
| `::file-selector-button` | Botão padrão de upload.                     |
| `::cue`                  | (Usado em legendas de vídeo com `<track>`). |

---

## 🎯 Exemplo prático (ícones com before e after)

```css
button::before {
  content: "🚀 ";
}

button::after {
  content: " 💥";
}

button {
  background: #222;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
```

---

## 🧾 Resumo rápido

✅ `::before` e `::after` → adicionam conteúdo virtual
✅ `::first-letter` e `::first-line` → formatam partes específicas do texto
✅ `::selection` → estiliza texto selecionado
✅ `::placeholder` → estiliza texto de placeholder em inputs
✅ `::marker` → altera o marcador de listas

---

## 📘 Referência oficial

📎 [MDN Web Docs — CSS Pseudo-elements](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elements)

---
