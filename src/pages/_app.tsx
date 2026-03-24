import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import "../ui/styles/globals.css";
import theme from '../ui/themes/theme';

function MyApp({ Component, pageProps }: AppProps) {



  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();
  }, []);

  return (
    <>
      <Head>
        <title>E-diaristas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}> 
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
