import AbortController from 'abort-controller';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { wrapper } from '../app/store';

Object.assign(globalThis, {
  AbortController,
});

const MyApp = ({
  Component, pageProps,
}: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);
