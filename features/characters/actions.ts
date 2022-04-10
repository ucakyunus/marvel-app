/* eslint-disable no-async-promise-executor */
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const getCharactersList = createAsyncThunk(
  'characters/charactersList',
  async (_, { getState }) => {
    const { characters: { currentPage } }: any = getState();

    const [
      response1,
      response2,
    ] = await Promise.all([
      api
        .get('/characters', {
          params: {
            limit: 100,
            offset: 2 * currentPage,
          },
        }),
      api
        .get('/characters', {
          params: {
            limit: 100,
            offset: 2 * currentPage + 1,
          },
        }),
    ]);

    const { results, total }:any = response1;
    const { results: results2 }:any = response2;

    return {
      list: [...results, ...results2],
      availableTotalPage: Math.ceil(total / (100 * 2)),
      currentPage,
    };
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
