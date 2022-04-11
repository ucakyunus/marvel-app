import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import {
  getCharactersList,
  charactersSelector,
  getSearchedCharactersList,
  resetCharacterList,
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
  const [userInput, setUserInput] = useState<string>('');
  const dispatch = useAppDispatch();
  const {
    list, currentPage, availableTotalPage, pending, searchPending,
  } = useAppSelector(charactersSelector);

  const isPageBottom = useInfiniteScroll();

  useEffect(() => {
    if (!isPageBottom || !!userInput) return;
    dispatch(getCharactersList());
  }, [dispatch, isPageBottom, userInput]);

  const handleChange = (value: any) => {
    setUserInput(value);
  };

  const handleDebounceChange = (value: any) => {
    if (value) {
      dispatch(getSearchedCharactersList(value));
    } else {
      dispatch(resetCharacterList());
      dispatch(getCharactersList());
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
            onChange={handleChange}
            onDebounceChange={handleDebounceChange}
            placeholder="SEARCH"
            pending={searchPending}
          />
        </div>

        {list.length > 0 && <CharacterList list={list} />}

        {(list.length === 0 && !pending) && <NoResult /> }

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
