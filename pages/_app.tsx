import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import { wrapper } from '../app/store';

const ProgressBar = dynamic(() => import('../shared-components/progress-bar'), { ssr: false });

const MyApp = ({
  Component, pageProps,
}: AppProps) => (
  <>
    <ProgressBar />
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(MyApp);
