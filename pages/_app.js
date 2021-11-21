import { ThemeProvider } from 'styled-components';

import Layout from '../components/templates/Layout/Layout';
import ContentPovider from '../providers/ContentProvider';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContentPovider allPosts={pageProps.posts} postsCountValue={pageProps.postsCount}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContentPovider>
    </ThemeProvider>
  );
}

export default MyApp;
