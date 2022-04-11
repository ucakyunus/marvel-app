import React from 'react';
import { GetServerSideProps } from 'next';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import { getCharacterDetail } from '../../../features/characterDetail/actions';
import { wrapper } from '../../../app/store';
import { Layout } from '../../../shared-components';

const CharacterDetail = () => {
  <Layout label="Detail">
    <div />
  </Layout>;
};

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
