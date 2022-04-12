/* eslint-disable no-async-promise-executor */
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import marvelApi from '../../services/api';
import { IResponse } from '../../interfaces';

export const resetCharacterList = createAction('characters/resetCharacterList');

export const getCharactersList = createAsyncThunk(
  'characters/charactersList',
  async ({ reset }: any, { getState, dispatch }) => {
    try {
      const { characters: { currentPage } }: any = getState();

      const [
        response1,
        response2,
      ]: [any, any] = await Promise.all([
        marvelApi
          .get('/characters', {
            params: {
              limit: 100,
              offset: 2 * currentPage,
              orderBy: 'name',
            },
          }),
        marvelApi
          .get('/characters', {
            params: {
              limit: 100,
              offset: 2 * currentPage + 1,
              orderBy: 'name',
            },
          }),
      ]);

      if (reset === true) {
        dispatch(resetCharacterList());
      }

      const { results, total } = response1 as IResponse;
      const { results: results2 } = response2;

      return {
        list: [...results, ...results2],
        availableTotalPage: Math.ceil(total / (100 * 2)),
        currentPage,
      };
    } catch (error) {
      return Promise.reject(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { characters: { currentPage, availableTotalPage } }: any = getState();
      if (availableTotalPage && currentPage > availableTotalPage) {
        return false;
      }
      return true;
    },
  },
);

export const getSearchedCharactersList = createAsyncThunk('chracters/searchCharactersList', async (searchValue: string|string[]) => {
  try {
    const response: any = await marvelApi
      .get('/characters', {
        params: {
          nameStartsWith: searchValue,
          orderBy: 'name',
        },
      });

    const { results, total } = response as IResponse;

    return {
      list: results,
      availableTotalPage: Math.ceil(total / (100 * 2)),
      currentPage: 0,
    };
  } catch (error) {
    return Promise.reject(error);
  }
});
