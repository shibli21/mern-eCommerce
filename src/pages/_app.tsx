import { ChakraProvider } from "@chakra-ui/core";
import { queryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReactQueryDevtools initialIsOpen />
      <ReactQueryCacheProvider queryCache={queryCache}>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ReactQueryCacheProvider>
    </>
  );
}

export default MyApp;
