import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { getCharacterDetail } from '../../../features/characterDetail/actions';
import { wrapper } from '../../../app/store';
import { Layout, Title } from '../../../shared-components';

import styles from '../../../styles/CharacterDetail.module.css';

const CharacterDetail = () => (
  <Layout label="Detail">
    <Link scroll={false} href="/characters">
      <a className={styles.backButton}>
        <FaArrowLeft />
        {' '}
        <Title>Back</Title>
      </a>
    </Link>

  </Layout>
);

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const characterId: string = context.params?.characterId as string || '';
    store.dispatch(getCharacterDetail(characterId));
    return {
      props: {},
    };
  },
);
export default CharacterDetail;
