import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { Router } from './components/Router/Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
