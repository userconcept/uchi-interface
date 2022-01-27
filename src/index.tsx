import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './styles/theme';
import { GlobalFonts } from './assets/fonts/fonts';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalFonts />
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
