import SimpleReactLightbox from 'simple-react-lightbox';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/templates/Layout/Layout';
import ContentPovider from '../providers/ContentProvider';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GoogleAnalytics />
      <GlobalStyle />
      <ContentPovider allPosts={pageProps.posts} postsCountValue={pageProps.postsCount}>
        <SimpleReactLightbox>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SimpleReactLightbox>
      </ContentPovider>
    </ThemeProvider>
  );
}

export default MyApp;
