import { memo, FC } from 'react';
import Link from 'next/link';
import { Title } from '.';
import styles from '../styles/CardLink.module.css';

type CardLinkProps = {
  href: string
  subtitle: string
  content: String
}

const CardLink: FC<CardLinkProps> = ({ href, subtitle, content }) => (
  <Link href={href}>
    <a className={styles.card}>
      <Title headingLevel="h2">{subtitle}</Title>
      <p>{content}</p>
    </a>
  </Link>
);

export default memo(CardLink);
