import React, { useState } from "react";
import type { AppProps } from 'next/app';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme} from '@mui/material';
import Layout from "../components/layout";
import NextNProgress from "nextjs-progressbar";
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';

import createEmotionCache from '../utility/createEmotionCache';
import '../styles/styles.css'
import lightThemeOptions from '../styles/theme/optionalTheme';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { lightTheme } = lightThemeOptions;

  const [queryClient] = useState(() =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 20 * 1000,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient} >
      <NextNProgress color="#8A2BE2" height={5} />
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider  theme={createTheme(lightTheme)}>
            <Layout>
              <CssBaseline />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CacheProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
