/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { memo } from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    label?: string;
  }
}

type LayoutProps = {
  label: string,
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, label }) => (
  <div className={styles.container}>
    <Head>
      <title label={label} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </div>
);

export default memo(Layout);
