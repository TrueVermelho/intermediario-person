# 📘 CSS – Flexbox

#### 🧩 O que é Flexbox

Flexbox (ou **Flexible Box Layout**) é um modo de layout do CSS criado para facilitar o **alinhamento, espaçamento e distribuição de elementos** dentro de um contêiner, mesmo quando o tamanho dos itens é dinâmico.

Para ativar o Flexbox em um contêiner, basta:

```css
.container {
  display: flex;
}
```

---

### 🧭 Direção e Eixo

* **Eixo principal:** definido por `flex-direction`
* **Eixo cruzado:** perpendicular ao principal

#### `flex-direction`

Define a direção dos itens:

```css
flex-direction: row;          /* padrão - da esquerda para a direita */
flex-direction: row-reverse;  /* direita para esquerda */
flex-direction: column;       /* de cima para baixo */
flex-direction: column-reverse; /* de baixo para cima */
```

---

### 🧱 Alinhamento e Distribuição

#### `justify-content` (eixo principal)

Controla o alinhamento dos itens **no eixo principal**:

```css
justify-content: flex-start;    /* início */
justify-content: flex-end;      /* fim */
justify-content: center;        /* centralizado */
justify-content: space-between; /* espaço entre */
justify-content: space-around;  /* espaço ao redor */
justify-content: space-evenly;  /* espaços iguais */
```

#### `align-items` (eixo cruzado)

Controla o alinhamento **no eixo cruzado**:

```css
align-items: stretch;   /* padrão */
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;
```

#### `align-content`

Controla o espaçamento entre **linhas** quando há quebra:

```css
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```

---

### 🧮 Controle Individual de Itens

#### `align-self`

Sobrescreve o `align-items` apenas para um item:

```css
.item {
  align-self: center;
}
```

#### `order`

Muda a ordem de exibição do item:

```css
.item1 { order: 1; }
.item2 { order: 2; }
```

#### `flex-grow`, `flex-shrink`, `flex-basis`

Controlam o tamanho e crescimento dos itens:

```css
.item {
  flex-grow: 1;   /* cresce para preencher espaço */
  flex-shrink: 1; /* encolhe quando necessário */
  flex-basis: 100px; /* tamanho base */
}

/* forma curta */
.item {
  flex: 1 1 100px; /* grow | shrink | basis */
}
```

---

### 🧰 Outras Propriedades Úteis

#### `flex-wrap`

Controla se os itens quebram linha:

```css
flex-wrap: nowrap; /* padrão */
flex-wrap: wrap;
flex-wrap: wrap-reverse;
```

#### `gap`

Cria espaçamento entre itens:

```css
gap: 10px;
row-gap: 10px;
column-gap: 20px;
```

---

### 💡 Exemplo Completo

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  height: 100px;
  background: #eee;
}
.container div {
  background: #3498db;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>
```

---

### 📚 Resumo Rápido

| Propriedade       | Função                                  |
| ----------------- | --------------------------------------- |
| `display: flex`   | Ativa o Flexbox                         |
| `flex-direction`  | Direção do eixo principal               |
| `justify-content` | Alinha no eixo principal                |
| `align-items`     | Alinha no eixo cruzado                  |
| `align-content`   | Alinha linhas múltiplas                 |
| `flex-wrap`       | Permite quebra de linha                 |
| `flex`            | Define crescimento, encolhimento e base |
| `order`           | Muda a ordem do item                    |
| `align-self`      | Alinhamento individual                  |
| `gap`             | Espaçamento entre itens                 |

---
