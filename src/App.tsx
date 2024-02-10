import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/themes/default';
import { BrowserRouter, Link } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { Router } from './Components/Router/Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* <h1>Hello Router</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/pagetwo'}>Page Two</Link>
      <Link to={'/pagethree'}>Page Three</Link> */}
    </ThemeProvider>
  );
}
