# 🧾 CSS — Atributos de Texto

Os **atributos de texto em CSS** controlam a aparência, o espaçamento, a decoração, o alinhamento e a transformação do texto.  
Essas propriedades são essenciais para deixar o conteúdo **legível**, **estético** e **bem formatado**.

---

## 🎨 Principais propriedades de texto

| Propriedade | Descrição | Exemplo |
|--------------|------------|----------|
| `color` | Define a cor do texto. | `color: #333;` |
| `font-family` | Define a família da fonte. | `font-family: Arial, sans-serif;` |
| `font-size` | Define o tamanho da fonte. | `font-size: 16px;` |
| `font-weight` | Define a espessura da fonte. | `font-weight: bold;` |
| `font-style` | Define o estilo (normal, itálico, oblíquo). | `font-style: italic;` |
| `text-align` | Alinha o texto horizontalmente. | `text-align: center;` |
| `text-decoration` | Define sublinhado, linha sobreposta ou removida. | `text-decoration: underline;` |
| `text-transform` | Controla a capitalização (maiúscula/minúscula). | `text-transform: uppercase;` |
| `text-indent` | Recuo da primeira linha do parágrafo. | `text-indent: 2em;` |
| `text-shadow` | Adiciona sombra ao texto. | `text-shadow: 2px 2px 5px gray;` |
| `letter-spacing` | Espaçamento entre letras. | `letter-spacing: 1px;` |
| `word-spacing` | Espaçamento entre palavras. | `word-spacing: 5px;` |
| `line-height` | Altura da linha (espaçamento vertical). | `line-height: 1.5;` |
| `white-space` | Controla quebras de linha e espaços. | `white-space: nowrap;` |
| `direction` | Direção do texto (esquerda→direita ou direita→esquerda). | `direction: rtl;` |
| `text-overflow` | Define o comportamento do texto que ultrapassa o limite. | `text-overflow: ellipsis;` |
| `overflow-wrap` | Define como quebrar palavras longas. | `overflow-wrap: break-word;` |
| `word-break` | Controla quebra de palavras. | `word-break: break-all;` |
| `writing-mode` | Define orientação vertical ou horizontal do texto. | `writing-mode: vertical-rl;` |

---

## 🧩 Exemplo prático

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Atributos de Texto - CSS</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f4f4f4;
      padding: 20px;
    }

    h1 {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #007bff;
    }

    p {
      color: #333;
      font-size: 18px;
      line-height: 1.6;
      text-indent: 2em;
      text-align: justify;
    }

    .sombra {
      text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    }

    .decoracao {
      text-decoration: underline overline red;
    }

    .overflow {
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border: 1px solid #ccc;
      padding: 5px;
    }
  </style>
</head>
<body>
  <h1>Atributos de Texto</h1>
  <p class="sombra decoracao">
    Este é um exemplo de texto com sombra e decoração.
  </p>
  <p>
    O CSS oferece muitas opções para ajustar o espaçamento, alinhamento e aparência do texto.
  </p>
  <div class="overflow">
    Este texto é muito longo e será cortado com reticências (...)
  </div>
</body>
</html>
````

---

## ✍️ Fontes e estilos de texto

| Propriedade    | Valor exemplo                 | Descrição                            |
| -------------- | ----------------------------- | ------------------------------------ |
| `font-family`  | `"Roboto", Arial, sans-serif` | Define as fontes preferenciais.      |
| `font-size`    | `16px`, `1em`, `1rem`         | Define o tamanho da fonte.           |
| `font-weight`  | `400`, `700`, `bold`          | Espessura do texto.                  |
| `font-style`   | `normal`, `italic`, `oblique` | Estilo da fonte.                     |
| `font-variant` | `small-caps`                  | Transforma minúsculas em versaletes. |
| `font`         | `italic bold 16px/1.5 Arial`  | Declaração resumida.                 |

---

## 📐 Alinhamento e espaçamento

| Propriedade      | Descrição                          | Exemplo                |
| ---------------- | ---------------------------------- | ---------------------- |
| `text-align`     | Alinhamento horizontal.            | `text-align: right;`   |
| `line-height`    | Espaçamento vertical entre linhas. | `line-height: 1.8;`    |
| `letter-spacing` | Espaço entre caracteres.           | `letter-spacing: 2px;` |
| `word-spacing`   | Espaço entre palavras.             | `word-spacing: 6px;`   |
| `text-indent`    | Recuo da primeira linha.           | `text-indent: 3em;`    |

---

## 💎 Efeitos decorativos

| Propriedade       | Efeito                               | Exemplo                                    |
| ----------------- | ------------------------------------ | ------------------------------------------ |
| `text-decoration` | Sublinhado, linha sobre ou removida. | `text-decoration: underline overline red;` |
| `text-shadow`     | Sombra no texto.                     | `text-shadow: 2px 2px 5px gray;`           |
| `text-transform`  | Controle de maiúsculas/minúsculas.   | `text-transform: capitalize;`              |

---

## 🧱 Controle de quebra e fluxo

| Propriedade          | Função                               | Exemplo                      |
| -------------------- | ------------------------------------ | ---------------------------- |
| `white-space`        | Controla quebras de linha e espaços. | `white-space: pre-wrap;`     |
| `word-wrap` (antigo) | Quebra palavras longas.              | `word-wrap: break-word;`     |
| `overflow-wrap`      | Substitui `word-wrap`.               | `overflow-wrap: break-word;` |
| `word-break`         | Define como palavras longas quebram. | `word-break: break-all;`     |
| `text-overflow`      | Mostra reticências ou corta texto.   | `text-overflow: ellipsis;`   |

---

## 🧭 Direção e orientação do texto

| Propriedade    | Função                        | Exemplo                      |
| -------------- | ----------------------------- | ---------------------------- |
| `direction`    | Direção do texto (ltr / rtl). | `direction: rtl;`            |
| `writing-mode` | Define o fluxo de escrita.    | `writing-mode: vertical-rl;` |

---

## 🎯 Dica prática

Combine propriedades para criar textos estilizados e legíveis:

```css
p.citacao {
  font-style: italic;
  color: #555;
  text-align: justify;
  text-indent: 2em;
  line-height: 1.8;
}
```

---

## 🧠 Boas práticas

✅ Use unidades relativas (`em`, `rem`) para responsividade.
✅ Mantenha bom contraste entre cor do texto e fundo.
✅ Evite usar muitas decorações simultaneamente.
✅ Sempre defina uma **fonte reserva** com `font-family`.

---

## 📘 Referência oficial

📎 [MDN Web Docs — CSS Text](https://developer.mozilla.org/pt-BR/docs/Web/CSS/text)

---
