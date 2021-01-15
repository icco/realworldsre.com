import type { AppProps } from "next/app";

import "tachyons/css/tachyons.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
