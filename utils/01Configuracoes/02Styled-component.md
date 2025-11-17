# Configurações para usar styled-component
## 1. Adcionar esses arquivos no lugar dos .css
### caminho da pasta:

```
|- src/style/
         |- global-styles.ts          # estilo global
         |- styled-components.d.ts    # tipando o theme
         |- theme.ts                  # CSS exportado como variavel
```
## 1. styled-components.d.ts

```
import { theme } from './theme';
type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
```

_"Ei, TypeScript! Quando alguém usar styled-components e acessar props.theme, use esse tipo aqui (Theme) como o tipo do DefaultTheme."_
## 2. theme.ts

 - Temas básicos para ser usado 

```
export const theme = {
  colors: {
    primary: '#010101',
    secondary: '#005b96',
    white: '#fafafa',
    lightGray: '#dddddd',
    gray: '#999999',
    darkDray: '#333333',
  },
  spacings: {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  },
  font: {
    sizes: {
      small: '1.2rem',
      medium: '1.8rem',
      large: '2rem',
      superLarge: '5rem',
    },
  },
};
```
## global-styles.ts

 - Tema global da pagina

```
'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }  
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`;
```
