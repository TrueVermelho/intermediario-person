'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62, 5%;
    /* deixar o nav acima da section */
    scroll-behavior: smooth;
    /* Rolagem suave */
    scroll-padding-top: 80px;
    /* Altura da navbar fixa */
  } 
  body {
    font-family: var(--font-family-primary);
    line-height: 1.6;
    color: var(--text-color);
  }
  h1 h2 h3 h4 h5 h6 {
    font-family: var(--title-color);
    margin-bottom: 1.5rem;
  }
`;
