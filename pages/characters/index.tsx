import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import {
  getCharactersList,
  charactersSelector,
  getSearchedCharactersList,
} from '../../features/characters';
import { wrapper } from '../../app/store';
import {
  Layout,
  ScrollTopArrow,
  Title,
  Spinner,
  DebounceInput,
  NoResult,
} from '../../shared-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import CharacterList from '../../components/characters/CharacterList';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const CharactersPage = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState<string|string[]>(router?.query?.search || '');
  const dispatch = useAppDispatch();
  const {
    list,
    currentPage,
    availableTotalPage,
    pending,
  } = useAppSelector(charactersSelector);

  const isPageBottom = useInfiniteScroll();

  useEffect(() => {
    if (!isPageBottom || !!userInput) return;
    dispatch(getCharactersList({ reset: false }));
  }, [dispatch, isPageBottom, userInput]);

  const handleChange = (value: any) => {
    setUserInput(value);
  };

  const handleDebounceChange = (value: any) => {
    if (value) {
      router.push({
        pathname: '/characters',
        query: { ...router.query, search: value },
      });
    } else {
      router.push({
        pathname: '/characters',
      });
    }
  };

  return (
    <Layout label="Characters">
      <>
        <div style={{
          width: '70%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}
        >
          <DebounceInput
            value={userInput}
            onChange={handleChange}
            onDebounceChange={handleDebounceChange}
            placeholder="SEARCH"
          />
        </div>

        {list.length > 0 && <CharacterList list={list} />}

        {(list.length === 0) && <NoResult /> }

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
  (store) => async ({ query }) => {
    if (query.search) {
      await store.dispatch(getSearchedCharactersList(query.search));
    } else {
      await store.dispatch(getCharactersList({ reset: true }));
    }
    return {
      props: {},
    };
  },
);

export default CharactersPage;
