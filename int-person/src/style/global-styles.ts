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
  
  .background {
    /* adcionar ao lado das classes */
    background-image: url('./background-city.png');
    background-size: cover;
    background-attachment: fixed;
  }
  
  .section {
    /* adcionar ao lado das classes */
    min-height: 100vh;
    /*tamanho 100% da tela automaticamente*/
    padding: 3rem;
    /*espaçamento padrao interno*/
  }

  /*===== RESPONSIVIDADE DO SECTION =====*/
  @media (max-width: 1024px) {
    .section {
      padding: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    .section {
      padding: 2rem;
      min-height: auto;
      /* permite que a altura se ajuste melhor em telas menores */
    }
  }

  @media (max-width: 480px) {
    .section {
      padding: 1.5rem;
    }
  }

  @media (max-width: 360px) {
    .section {
      padding: 1rem;
    }
  }
`;
