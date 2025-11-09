'use client';
  
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../style/global-styles';
import { theme } from '../../style/theme';

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
