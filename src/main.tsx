import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { App } from './app';
import { ChakraProvider, ColorModeScript, ThemeConfig, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const root = (() => {
  if (!localStorage.getItem('chakra-ui-color-mode')) {
    localStorage.setItem('chakra-ui-color-mode', 'dark');
  }

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider>
          <BrowserRouter>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  );
})();

ReactDOM.createRoot(document.getElementById('root')!).render(root);
