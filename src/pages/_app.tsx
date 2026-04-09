import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Footer from "../ui/components/surfaces/Footer/Footer";
import Header from "../ui/components/surfaces/Header/Header";
import { AppContainer } from "../ui/styles/pages/_app.styled";
import theme from "../ui/themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.querySelector("#jss-server-side")?.remove();
  });
  return (
    <>
      <head>
        <title>E-diaristas {pageProps.title && ` - ${pageProps.title}`}</title>
      </head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
