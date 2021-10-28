import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

const fetcher = (url: string) => fetch(url);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default MyApp;
