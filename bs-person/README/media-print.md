# 🖨️ CSS `@media print` — Guia Completo

## 📘 O que é

A **regra `@media print`** é usada no CSS para aplicar **estilos específicos quando o conteúdo é impresso** (ou visualizado na prévia de impressão do navegador).

Ela permite que seu site seja impresso de forma limpa e organizada — sem menus, cores de fundo desnecessárias ou elementos interativos que não fazem sentido no papel.

---

## 🧩 Estrutura básica

```css
@media print {
  /* Estilos aplicados SOMENTE na impressão */
  body {
    background: white;
    color: black;
  }

  nav, footer, .menu, .botao {
    display: none; /* Esconde partes que não precisam ser impressas */
  }
}
```

Tudo o que estiver dentro de `@media print` **só será ativado** quando o usuário escolher “Imprimir” (Ctrl + P).

---

## 🎯 Usos mais comuns

### 1. Esconder elementos desnecessários

Menus, botões, vídeos e banners geralmente não são úteis no papel.

```css
@media print {
  header, nav, footer, button, video, iframe {
    display: none !important;
  }
}
```

---

### 2. Ajustar cores e contraste

O papel não tem luz — evite fundos escuros ou imagens pesadas.

```css
@media print {
  body {
    background: #fff !important;
    color: #000 !important;
  }

  a {
    color: #000;
    text-decoration: underline;
  }
}
```

---

### 3. Exibir URLs dos links

Na impressão, o usuário não pode clicar — então é comum mostrar o endereço.

```css
@media print {
  a::after {
    content: " (" attr(href) ")";
    font-size: 0.9em;
    color: #555;
  }
}
```

---

### 4. Ajustar o layout (grid/flex)

Transforme layouts complexos em versões lineares (mais simples para papel).

```css
@media print {
  .sobre-grid {
    display: block; /* Evita quebra estranha na impressão */
  }

  .video-container {
    display: none; /* Vídeos não são impressos */
  }
}
```

---

### 5. Controlar quebra de página

Evite que um bloco de texto seja cortado no meio.

```css
@media print {
  h2, p {
    page-break-inside: avoid;
  }

  .section {
    page-break-after: always; /* Quebra após cada seção */
  }
}
```

---

## 🧠 Dicas úteis

* Use **`@page`** para definir margens e orientação da página impressa:
* Estilo folha

  ```css
  @page {
    margin: 1.5cm;
    size: A4 portrait;
  }
  ```

* Estilo cartão da página

  ```css
    @page {
    size: A4 portrait; /* ou landscape para horizontal */
    margin: 2cm;
    }
    ```

---

## 🧰 Exemplo prático aplicado ao seu projeto

```css
@media print {
  body {
    background: white;
    color: black;
  }

  header, footer, .menu, .video-container {
    display: none;
  }

  .sobre-texto {
    text-align: left;
    font-size: 12pt;
  }

  .sobre-container {
    box-shadow: none;
    border: 1px solid #ccc;
  }
}
```

✅ Esse exemplo faz com que **a seção "Sobre"** do seu site seja impressa com clareza — apenas o texto, sem vídeo, sombras ou cores desnecessárias.

---

## 🗂️ Resumo rápido

| Ação                         | Código / Efeito                              |
| ---------------------------- | -------------------------------------------- |
| Aplicar estilos na impressão | `@media print { ... }`                       |
| Esconder elementos           | `display: none;`                             |
| Mostrar URL após link        | `a::after { content: " (" attr(href) ")"; }` |
| Evitar quebra no meio        | `page-break-inside: avoid;`                  |
| Quebrar página depois        | `page-break-after: always;`                  |
| Definir margens da página    | `@page { margin: 2cm; }`                     |

---
