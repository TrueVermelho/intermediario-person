# Layout Geral

## Visualização Geral do Layout

```
src/
├── app/
│     └── layout.tsx
├── components/
│     ├── Footer/
│     │   └──── footer.tsx
│     └── layout/
│         ├──── ThemeProviderWrapper.tsx
│         └────
├── lib/
│     └── seo-metadata.ts
```

---
## Layout

 1. Adcione os components **(Footer, navbar,)** em layout para mostrar em todas as pages.
 ```
  <body>
    <ThemeProviderWrapper>
      <GlobalStyles />

      {/* 🔝 Navbar aparece em todas as páginas */}
      <NavBar />

      {/* 📦 Área de conteúdo dinâmica */}
      <main>{children}</main>

      {/* 🔚 Footer global */}
      <Footer />
    </ThemeProviderWrapper>
  </body>
 ```

---
# Global Style

  1. **O Global Style** em **(style/global-styles.ts)** ficaria o estilo principal do html.
