import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './styles/theme';
import { GlobalFonts } from './assets/fonts/fonts';
import { GlobalStyle } from './styles/global';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalFonts />
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </StrictMode>
);
