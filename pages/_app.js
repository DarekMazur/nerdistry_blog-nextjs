import SimpleReactLightbox from 'simple-react-lightbox';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/templates/Layout/Layout';
import ContentPovider from '../providers/ContentProvider';
import { GlobalStyle } from '../styles/globalStyle';
import { theme } from '../utils/theme';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
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
