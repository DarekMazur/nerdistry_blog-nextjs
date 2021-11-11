import { ThemeProvider } from 'styled-components';

import Layout from '../components/templates/Layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from './theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
