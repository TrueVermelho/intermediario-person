# Layout Geral

## - Visualização Geral do Layout

⚠️ MODIFICAR A METADATA - SEO ⚠️ - **(src/lib/seo-metadata.ts)**

```
src/
├── app/
│     ├── global.css (style-geral.css que vem do basico)
│     └── layout.tsx
├── components/
│     ├── Footer/
│     │   └──── footer.tsx
│     └── layout/
│         └──── ThemeProviderWrapper.tsx (apagar nao usar)
├── lib/
│     └── seo-metadata.ts
├── style/
│     ├──── global-styles.ts (style geral)
│     └──── theme.ts (apagar nao usar)
```

1. Apagar o arquivo **theme.ts** em **style/theme.ts**.
2. apagar o **ThemeProviderWrapper.tsx** em **components/layout/ThemeProviderWrapper.tsx**
3. ⚠️ Usar sómente **global-style.ts** com CSS recebido do **basico**. ⚠️

## - LAYOUT

 Adcione os components **(Footer, navbar,)** em layout para mostrar em todas as pages.
 ```
  <body>
      <GlobalStyles />

      {/* 🔝 Navbar aparece em todas as páginas */}
      <NavBar />

      {/* 📦 Área de conteúdo dinâmica */}
      <main>{children}</main>

      {/* 🔚 Footer global */}
      <Footer />
  </body>
 ```

# - Global Style

  1. O **(style/global-styles.ts)** ficaria o estilo principal do html.
  2. O **(app/global.css)** importa ele no **layout**:``import '@/app/globals.css';``
  3. O style-geral do basico ficaria no global.css intermediario.
