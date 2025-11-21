# 📘 CSS – Grid Layout

#### 🧩 O que é o Grid

O **CSS Grid Layout** é um sistema de **layout bidimensional**, ou seja, permite organizar elementos **em linhas e colunas** com controle total de tamanho, espaçamento e alinhamento.

Para ativar o Grid:

```css
.container {
  display: grid;
}
```

---

### 🧱 Estrutura Básica

Um Grid é composto por:

* **Container (pai)** → onde o `display: grid` é aplicado
* **Itens (filhos)** → os elementos que ficam dentro da grade

Exemplo:

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 50px 50px;
  gap: 10px;
}
```

---

### 📏 Definindo Linhas e Colunas

#### `grid-template-columns` e `grid-template-rows`

Definem o número e tamanho das colunas e linhas.

```css
grid-template-columns: 100px 200px auto;
grid-template-rows: 50px 100px;
```

##### Unidades úteis:

* `px`, `%`, `em`, `rem` → tamanhos fixos
* `fr` → fração do espaço disponível
* `auto` → ajusta ao conteúdo
* `min-content` / `max-content` → baseia-se no conteúdo
* `minmax(min, max)` → define limites flexíveis

Exemplo:

```css
grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: 100px auto;
```

---

### 🧮 Espaçamento e Gaps

```css
gap: 10px;        /* espaço entre linhas e colunas */
row-gap: 10px;    /* espaço apenas entre linhas */
column-gap: 20px; /* espaço apenas entre colunas */
```

---

### 📐 Posicionando Itens

#### `grid-column` e `grid-row`

Controlam em qual linha/coluna o item começa e termina:

```css
.item1 {
  grid-column: 1 / 3; /* da coluna 1 até antes da 3 */
  grid-row: 1 / 2;    /* da linha 1 até antes da 2 */
}
```

---

### 🎯 Alinhamento

#### Alinhamento do container:

```css
justify-items: center; /* eixo horizontal */
align-items: center;   /* eixo vertical */
```

#### Alinhamento do próprio container dentro do pai:

```css
justify-content: space-between;
align-content: center;
```

#### Alinhamento individual:

```css
.item {
  justify-self: end;
  align-self: start;
}
```

---

### 🧰 Grid Automático

#### `grid-auto-rows` e `grid-auto-columns`

Controlam o tamanho de linhas/colunas criadas automaticamente.

```css
grid-auto-rows: 100px;
grid-auto-columns: 1fr;
```

#### `grid-auto-flow`

Controla o preenchimento automático dos itens:

```css
grid-auto-flow: row;    /* padrão */
grid-auto-flow: column; /* preenche por colunas */
grid-auto-flow: dense;  /* tenta preencher espaços vazios */
```

---

### 🧩 Template de Áreas

Você pode **nomear áreas do grid** com `grid-template-areas`.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "menu main"
    "footer footer";
  grid-template-columns: 150px 1fr;
  grid-template-rows: auto 1fr auto;
}
.header { grid-area: header; }
.menu   { grid-area: menu; }
.main   { grid-area: main; }
.footer { grid-area: footer; }
```

HTML:

```html
<div class="container">
  <div class="header">Header</div>
  <div class="menu">Menu</div>
  <div class="main">Main</div>
  <div class="footer">Footer</div>
</div>
```

---

### 💡 Exemplo Completo

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  gap: 10px;
  justify-items: center;
  align-items: center;
  background: #eee;
}
.item {
  background: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
</style>
```

---

### 📚 Resumo Rápido

| Propriedade                         | Função                       |
| ----------------------------------- | ---------------------------- |
| `display: grid`                     | Ativa o Grid Layout          |
| `grid-template-columns`             | Define colunas               |
| `grid-template-rows`                | Define linhas                |
| `grid-template-areas`               | Define áreas nomeadas        |
| `grid-column` / `grid-row`          | Controla a posição dos itens |
| `gap`                               | Espaçamento entre células    |
| `justify-items` / `align-items`     | Alinhamento interno          |
| `justify-content` / `align-content` | Alinhamento geral            |
| `grid-auto-flow`                    | Preenchimento automático     |
| `minmax()`                          | Define tamanhos flexíveis    |
| `fr`                                | Unidade fracionária          |

---
