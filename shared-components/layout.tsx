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
  children: React.ReactNode,
  className?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, label, className }) => (
  <div className={`${styles.container} ${className}`}>
    <Head>
      <title>{label}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {children}
  </div>
);

export default memo(Layout);
