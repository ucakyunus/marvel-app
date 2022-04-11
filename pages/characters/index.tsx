import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import {
  getCharactersList,
  charactersSelector,
} from '../../features/characters';
import { wrapper } from '../../app/store';
import {
  Layout, ScrollTopArrow, Title, Spinner,
} from '../../shared-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import CharacterList from '../../components/characters/CharacterList';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const {
    list, currentPage, availableTotalPage, pending,
  } = useAppSelector(charactersSelector);

  const isPageBottom = useInfiniteScroll();

  useEffect(() => {
    if (!isPageBottom) return;
    dispatch(getCharactersList());
  }, [dispatch, isPageBottom]);

  return (
    <Layout label="Characters">
      <>
        <CharacterList list={list} />

        {pending && (
          <div style={{ display: 'flex', textAlign: 'center' }}>
            <Spinner />
          </div>
        )}

        {availableTotalPage && currentPage > availableTotalPage && (
          <Title
            headingLevel="h1"
            style={{ textAlign: 'center' }}
          >
            End of list...
          </Title>
        )}
      </>
      <ScrollTopArrow />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getCharactersList());
    return {
      props: {},
    };
  },
);

export default CharactersPage;
